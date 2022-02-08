import { Button } from "react-bootstrap"
import PropTypes from 'prop-types';

const AllButton = (props) => {
    const { children, variant, size="sm" } = props
    return (
        <Button className={`btn btn-${variant} btn-${size}`} >
            {children}
        </Button>
    )
}

export default AllButton

AllButton.prototype = {
    children: PropTypes.string.isRequired,
    variant: PropTypes.string,
    size: PropTypes.size
}