import React from 'react';
import { CSVReader } from 'react-csv';

const MyCSVReader = () => {
  const handleFile = (data) => {
    console.log(data); // Affiche les données CSV dans la console
  };

  return (
    <CSVReader
      onFileLoaded={handleFile}
      inputStyle={{ color: 'red' }}
      parserOptions={{ header: true }}
    />
  );
};

export default MyCSVReader;
