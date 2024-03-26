import React, { useState } from 'react';

const ListPersonnel = ({ personnel }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Fonction pour gérer la saisie dans la barre de recherche
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtrer le personnel en fonction du terme de recherche
    const filteredPersonnel = personnel.filter((person) =>
        person.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Ajout class supplementaires
    document.body.classList.add('list-personnel');

    // Ajout class supplementaires

    return (

        <div className="list-personnel">
            
            
            <div className="flex justify-end mb-4">
                <div className="relative w-64">
                    <input
                        type="text"
                        className="border rounded px-3 py-1 w-full"
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <svg
                        className="absolute right-0 top-0 mt-2 mr-2 h-4 w-4 text-Cyan-700 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
            </div>
            <table className='Latable'>
                <thead>
                    <tr>
                        <th className="border px-4 py-2">NOM</th>
                        <th className="border px-4 py-2">PRÉNOM</th>
                        <th className="border px-4 py-2">RÔLE</th>
                        <th className="border px-4 py-2">E-mail</th>
                        <th className="border px-4 py-2">ENTRÉE SERVICE</th>
                        <th className="border px-4 py-2">GRADE</th>
                        <th className="border px-4 py-2">AFFECTATION</th>
                        <th className="border px-4 py-2">LOCALISATION</th>
                        <th className="border px-4 py-2">N°</th>
                        <th className="border px-4 py-2">NOM CHEF DU SERVICE</th>
                        <th className="border px-4 py-2">PRÉNOM CHEF DU SERVICE</th>
                        <th className="border px-4 py-2">E-MAIL CHEF SERVICE</th>
                        <th className="border px-4 py-2">DÉPARTEMENT</th>
                        <th className="border px-4 py-2">NOM CHEF DÉPARTEMENT</th>
                        <th className="border px-4 py-2">PRÉNOM CHEF DÉPARTEMENT</th>
                        <th className="border px-4 py-2">E-MAIL CHEF DÉPARTEMENT</th>
                        {/* Ajoutez les autres en-têtes de colonne ici */}
                    </tr>
                </thead>
                <tbody>
                    {filteredPersonnel.map((person, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{person.nom}</td>
                            <td className="border px-4 py-2">{person.prenom}</td>
                            <td className="border px-4 py-2">{person.role}</td>
                            <td className="border px-4 py-2">{person.email}</td>
                            <td className="border px-4 py-2">{person.entreeService}</td>
                            <td className="border px-4 py-2">{person.grade}</td>
                            <td className="border px-4 py-2">{person.affectation}</td>
                            <td className="border px-4 py-2">{person.localisation}</td>
                            <td className="border px-4 py-2">{person.numero}</td>
                            <td className="border px-4 py-2">{person.nomChefService}</td>
                            <td className="border px-4 py-2">{person.prenomChefService}</td>
                            <td className="border px-4 py-2">{person.emailChefService}</td>
                            <td className="border px-4 py-2">{person.departement}</td>
                            <td className="border px-4 py-2">{person.nomChefDepartement}</td>
                            <td className="border px-4 py-2">{person.prenomChefDepartement}</td>
                            <td className="border px-4 py-2">{person.emailChefDepartement}</td>
                            {/* Ajoutez les autres cellules de données ici */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default ListPersonnel;
