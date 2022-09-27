import React from 'react';

const Carte = (objet) => {

    return (
        <div className="Carte">
            {objet.element.map((value) => {
                return (
                    <p>
                        <img src={value.url} alt="error" />
                    </p>
                )
            })}
        </div>
    )
}

export default Carte;