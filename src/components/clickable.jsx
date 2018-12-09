import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ children, title, onClick }) => (
    <div
        className={'clickable'}
        title={title}
        onClick={onClick}
    >
        {children}
    </div>
)

Component.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Component