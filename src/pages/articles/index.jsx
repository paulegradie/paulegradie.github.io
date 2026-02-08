import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'


export default function ArticlesIndex({ articles }) {
	return (
		<>
			<Head>
				<title>Articles - Paul Gradie</title>
				<meta
					name="description"
					content="My voice on building software, artificial intelligence, life, and much more."
				/>
			</Head>
			<SimpleLayout
				title="In My Own Words"
				subtitle='...with a little help from AI'
				intro="On Software, Artificial Intelligence, Personal Experiences, and more."
			>
				<div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-l md:dark:border-zinc-100 md:dark:border-zinc-200/40">
					<div className="flex max-w-3xl flex-col space-y-16">
						{
							groupByYear(articles).map((group, i) => {
								const year = group[0].date.split("-")[0];
								return (
									<div key={`${group[0]}-${i}`}>
										<Divider key={`${year}-${i}`} year={year} />
										{group.map((article, i) => (<Article key={article.slug} article={article} />))}
									</div>
								)
							})
						}
					</div>
				</div>
			</SimpleLayout>
		</>
	)
}


function Article({ article }) {
	return (
		<article className="md:grid md:grid-cols-4 md:items-baseline ">
			<Card className="md:col-span-3 mt-3 mb-3 ">
				<Card.Title href={`/articles/${article.slug}`}>
					{article.title}
				</Card.Title>
				<Card.Eyebrow
					as="time"
					dateTime={article.date}
					className="md:hidden"
					decorate
				>
					{formatDate(article.date)}
				</Card.Eyebrow>
				<Card.Description>{article.description}</Card.Description>
				{article.series && (
					<div className="mt-3 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-200">
						<span>{article.series}</span>
						{Number.isFinite(article.seriesPart) && (
							<span className="text-teal-300/80">Part {article.seriesPart}</span>
						)}
					</div>
				)}
				<Card.Cta>Read article</Card.Cta>
			</Card>
			<Card.Eyebrow
				as="time"
				dateTime={article.date}
				className="mt-1 hidden md:block"
			>
				{formatDate(article.date)}
			</Card.Eyebrow>
		</article>
	)
}

function groupByYear(arr) {
	// Step 1: Sort the array by date
	arr.sort((a, b) => new Date(b.date) - new Date(a.date));

	// Step 2: Initialize an empty array
	const groupedArr = [];

	// Step 3: Iterate through the sorted array
	for (const obj of arr) {
		// Step 4: Extract the year from the date property
		const year = new Date(obj.date).getFullYear();

		// Step 5: Check if a sub-array for this year already exists
		let yearGroup = groupedArr.find(subArr => new Date(subArr[0].date).getFullYear() === year);

		// Step 6: Create or append
		if (yearGroup) {
			yearGroup.push(obj);
		} else {
			groupedArr.push([obj]);
		}
	}

	return groupedArr;
}

function Divider(props) {
	// Cycle through accent colors based on year
	const getYearColor = (year) => {
		const colors = [
			'from-teal-500/20 to-teal-400/10 border-teal-400/30 text-teal-300',
			'from-accent-creative/20 to-accent-creative/10 border-accent-creative/30 text-violet-300',
			'from-accent-cool/20 to-accent-cool/10 border-accent-cool/30 text-blue-300',
			'from-accent-warm/20 to-accent-warm/10 border-accent-warm/30 text-amber-300'
		];
		return colors[parseInt(year) % colors.length];
	};

	return (
		<div className="relative flex py-8 items-center group">
			<div className="flex-grow border-t border-zinc-200/20 group-hover:border-teal-400/40 transition-colors duration-300"></div>
			<div className={`flex-shrink mx-6 px-6 py-3 bg-gradient-to-r backdrop-blur-sm rounded-2xl border shadow-lg transition-all duration-300 hover:scale-105 ${getYearColor(props.year)}`}>
				<span className="text-3xl font-bold">{props.year}</span>
			</div>
			<div className="flex-grow border-t border-zinc-200/20 group-hover:border-teal-400/40 transition-colors duration-300"></div>
		</div>
	);
}


export async function getStaticProps() {
	return {
		props: {
			articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
		},
	}
}
