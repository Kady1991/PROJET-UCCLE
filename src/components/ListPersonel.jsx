import React, { useState } from 'react';

const ListPersonel = ({ personnel }) => {
    const [csvFile, setCsvFile] = useState(null);
    const [xlsFile, setXlsFile] = useState(null);

    // Fonction pour gérer l'import CSV
    const handleCSVChange = (event) => {
        const file = event.target.files[0];
        setCsvFile(file);

        // Logique pour gérer l'import du fichier CSV
        const reader = new FileReader();
        reader.onload = (e) => {
            const csvData = e.target.result;
            // Traitement du fichier CSV
            console.log(csvData);
        };
        reader.readAsText(file);
    };

    // Fonction pour gérer l'import XLS
    const handleXLSChange = (event) => {
        const file = event.target.files[0];
        setXlsFile(file);

        // Logique pour gérer l'import du fichier XLS
        const reader = new FileReader();
        reader.onload = (e) => {
            const xlsData = e.target.result;
            // Traitement du fichier XLS
            console.log(xlsData);
        };
        reader.readAsBinaryString(file);
    };

    return (
        <div className="overflow-x-auto">
            <div className="flex justify-between mb-4">
                
            </div>
            <table className="table-auto w-full">
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
                    </tr>
                </thead>
                <tbody>
                    {personnel.map((person, index) => (
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListPersonel;
