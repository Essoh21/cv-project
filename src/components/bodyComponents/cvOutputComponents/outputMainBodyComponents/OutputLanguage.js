const OutputLanguage = (props) => {
    return (
        <section className={props.outputLanguagesClassName}>
            <h3>
                Languages
            </h3>
            {props.languages.map((language) => (
                <div key={language.id}
                    className="DisplayedLanguage" >
                    <div className="LanguageAndlevel">
                        <span className="Lang">
                            {language.language}
                        </span>
                        <span>
                            {language.level}
                        </span>
                    </div>
                    <p>
                        {language.description}
                    </p>
                </div>
            ))}



        </section>
    )
}

export default OutputLanguage;