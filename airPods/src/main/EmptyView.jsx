import React from 'react';
import { Link } from 'react-router-dom';

const EmptyView = (props) => {

    const { icon, msg, link, btnText } = props;

    return (
        <>
            <div className="text-center mt-5">
                <div className="trash_icon">
                    {icon}
                </div>
                <h2 className='text-secondary mt-3'>{msg}</h2>
                {
                    link && (
                        <Link to={link}><button className='btn empty-button btn-success my-3'> {btnText}</button>
                        </Link>
                    )
                }
            </div>
        </>
    );
};

export default EmptyView;