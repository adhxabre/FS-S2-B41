import PropTypes from "prop-types"

export default function DetailAbout(props) {
    return (
        <>
            <h1>Title: {props.title}</h1>
            <p>Summary: {props.summary}</p>
            <p>Total guest: {props.total}</p>
        </>
    )
}

DetailAbout.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    total: PropTypes.number,
}