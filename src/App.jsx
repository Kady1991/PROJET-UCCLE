import React from 'react';
import { CSVLink } from 'react-csv';
import ListPersonel from './components/ListPersonel'; // Assurez-vous que le chemin d'importation est correct

const App = () => {
  // Exemple de données de personnel
  const personnelData = [
    
    { nom: 'Doe', prenom: 'John', role: 'Manager', email: 'john.doe@example.com', entreeService: '01/01/2020', grade: 'Senior', affectation: 'Département des ventes', localisation: 'Paris', numero: '123', nomChefService: 'Smith', prenomChefService: 'Alice', emailChefService: 'alice.smith@example.com', departement: 'Ventes', nomChefDepartement: 'Brown', prenomChefDepartement: 'Bob', emailChefDepartement: 'bob.brown@example.com' },
    { nom: 'Doe', prenom: 'John', role: 'Manager', email: 'john.doe@example.com', entreeService: '01/01/2020', grade: 'Senior', affectation: 'Département des ventes', localisation: 'Paris', numero: '123', nomChefService: 'Smith', prenomChefService: 'Alice', emailChefService: 'alice.smith@example.com', departement: 'Ventes', nomChefDepartement: 'Brown', prenomChefDepartement: 'Bob', emailChefDepartement: 'bob.brown@example.com' },
    { nom: 'Doe', prenom: 'John', role: 'Manager', email: 'john.doe@example.com', entreeService: '01/01/2020', grade: 'Senior', affectation: 'Département des ventes', localisation: 'Paris', numero: '123', nomChefService: 'Smith', prenomChefService: 'Alice', emailChefService: 'alice.smith@example.com', departement: 'Ventes', nomChefDepartement: 'Brown', prenomChefDepartement: 'Bob', emailChefDepartement: 'bob.brown@example.com' },
    { nom: 'Doe', prenom: 'John', role: 'Manager', email: 'john.doe@example.com', entreeService: '01/01/2020', grade: 'Senior', affectation: 'Département des ventes', localisation: 'Paris', numero: '123', nomChefService: 'Smith', prenomChefService: 'Alice', emailChefService: 'alice.smith@example.com', departement: 'Ventes', nomChefDepartement: 'Brown', prenomChefDepartement: 'Bob', emailChefDepartement: 'bob.brown@example.com' },
    { nom: 'Doe', prenom: 'John', role: 'Manager', email: 'john.doe@example.com', entreeService: '01/01/2020', grade: 'Senior', affectation: 'Département des ventes', localisation: 'Paris', numero: '123', nomChefService: 'Smith', prenomChefService: 'Alice', emailChefService: 'alice.smith@example.com', departement: 'Ventes', nomChefDepartement: 'Brown', prenomChefDepartement: 'Bob', emailChefDepartement: 'bob.brown@example.com' },
    { nom: 'Doe', prenom: 'John', role: 'Manager', email: 'john.doe@example.com', entreeService: '01/01/2020', grade: 'Senior', affectation: 'Département des ventes', localisation: 'Paris', numero: '123', nomChefService: 'Smith', prenomChefService: 'Alice', emailChefService: 'alice.smith@example.com', departement: 'Ventes', nomChefDepartement: 'Brown', prenomChefDepartement: 'Bob', emailChefDepartement: 'bob.brown@example.com' },
    { nom: 'Doe', prenom: 'John', role: 'Manager', email: 'john.doe@example.com', entreeService: '01/01/2020', grade: 'Senior', affectation: 'Département des ventes', localisation: 'Paris', numero: '123', nomChefService: 'Smith', prenomChefService: 'Alice', emailChefService: 'alice.smith@example.com', departement: 'Ventes', nomChefDepartement: 'Brown', prenomChefDepartement: 'Bob', emailChefDepartement: 'bob.brown@example.com' },
    { nom: 'Doe', prenom: 'John', role: 'Manager', email: 'john.doe@example.com', entreeService: '01/01/2020', grade: 'Senior', affectation: 'Département des ventes', localisation: 'Paris', numero: '123', nomChefService: 'Smith', prenomChefService: 'Alice', emailChefService: 'alice.smith@example.com', departement: 'Ventes', nomChefDepartement: 'Brown', prenomChefDepartement: 'Bob', emailChefDepartement: 'bob.brown@example.com' },
    { nom: 'Doe', prenom: 'John', role: 'Manager', email: 'john.doe@example.com', entreeService: '01/01/2020', grade: 'Senior', affectation: 'Département des ventes', localisation: 'Paris', numero: '123', nomChefService: 'Smith', prenomChefService: 'Alice', emailChefService: 'alice.smith@example.com', departement: 'Ventes', nomChefDepartement: 'Brown', prenomChefDepartement: 'Bob', emailChefDepartement: 'bob.brown@example.com' },
    { nom: 'Doe', prenom: 'John', role: 'Manager', email: 'john.doe@example.com', entreeService: '01/01/2020', grade: 'Senior', affectation: 'Département des ventes', localisation: 'Paris', numero: '123', nomChefService: 'Smith', prenomChefService: 'Alice', emailChefService: 'alice.smith@example.com', departement: 'Ventes', nomChefDepartement: 'Brown', prenomChefDepartement: 'Bob', emailChefDepartement: 'bob.brown@example.com' },
   
    // Ajoutez plus de données ici si nécessaire
  ];

  return (
    <div className=" list-personnel grid place-items-center mt-4">
      <h1 className="text-2xl font-bold my-4">Liste du Personnel</h1>
      <CSVLink data={personnelData} filename={"personnel.csv"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" encoding="UTF-8">
        Télécharger CSV
      </CSVLink>
      <ListPersonel personnel={personnelData} />
    </div>
    

     
  );
};

export default App;