import React, { useState } from 'react';

const FileImportComponent = () => {
  const [fileData, setFileData] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const fileContent = e.target.result;
      setFileData(fileContent);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <h2>Importation de fichier</h2>
      <input type="file" onChange={handleFileChange} />
      {fileData && (
        <div>
          <h3>Contenu du fichier :</h3>
          <pre>{fileData}</pre>
        </div>
      )}
    </div>
  );
};

export default FileImportComponent;

