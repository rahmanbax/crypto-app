import React from 'react';

const ButtonPrimary = (props) => {
    return (
        <button className="rounded-xl bg-[#FFC31B] text-black text-sm font-medium py-2 px-4">
            {props.children}
        </button>
    );
};

export default ButtonPrimary;