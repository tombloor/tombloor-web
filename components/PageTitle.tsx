
export interface PageTitleProps {
    title: string
}

export default function PageTitle(props: PageTitleProps) {
    const { title } = props;

    return (
        <h1 className="my-10">{ title }</h1>
    )
}