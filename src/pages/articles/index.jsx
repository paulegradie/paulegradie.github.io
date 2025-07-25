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
	return (
		<div className="relative flex py-8 items-center">
			<div className="flex-grow border-t border-zinc-200/20"></div>
			<div className="flex-shrink mx-6 px-6 py-3 bg-zinc-50/5 backdrop-blur-sm rounded-2xl border border-zinc-200/10">
				<span className="text-3xl font-bold text-zinc-300">{props.year}</span>
			</div>
			<div className="flex-grow border-t border-zinc-200/20"></div>
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
