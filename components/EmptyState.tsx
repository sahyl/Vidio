import Image from "next/image"

export const EmptyState = ({title , icon , description}: EmptyStateProps)=>{
    return (
        <section className="empty-state">
            <figure>
                <Image src={icon} alt="icon" width={46} height={46}/>
            </figure>

            <article>
                <h1>{title}</h1>
                <p>{description}</p>
            </article>

        </section>
    )
}