import classnames from 'classnames';
import cls from './HPos.module.scss';

export interface HPosProps {
    children: React.ReactNode;
    position: 'center' | 'flex-start' | 'flex-end';
}

export const HPos = ({ children, position = 'center' }: HPosProps) => {
    return <div style={{ display: 'flex', justifyContent: 'center' }}> {children}</div>;
};
