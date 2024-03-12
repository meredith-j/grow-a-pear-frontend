
export default function testRadioButtons () {

    let x = 0;

    return (
        <>
        <form>
        <p>Did you vibe?</p>
            <input type="radio" id={`good vibe ${x+1}`} name={`vibe ${x+1}`} value="true" />
                <label htmlFor={`good vibe ${x+1}`}>good vibes</label>
            <input type="radio" id={`bad vibe ${x+1}`} name={`vibe ${x+1}`} value="false" />
                <label htmlFor={`bad vibe ${x+1}`}>bad vibes</label>
        <p>Did you vibe?</p>
            <input type="radio" id={`good vibe ${x+2}`} name={`vibe ${x+2}`} value="true" />
                <label htmlFor={`good vibe ${x+2}`}>good vibes</label>
            <input type="radio" id={`bad vibe ${x+2}`} name={`vibe ${x+2}`} value="false" />
                <label htmlFor={`bad vibe ${x+2}`}>bad vibes</label>
        </form>
        </>
    )
}