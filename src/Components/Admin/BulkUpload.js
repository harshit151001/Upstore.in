import React, { useState } from 'react';
import { useFormik } from 'formik';
import Axios from 'axios';
import API from '../../backend';
import styled from 'styled-components';
import arrowPng from '../Images/arrow.png';
import { isAutheticated } from '../../auth/helper';

const Container = styled.div`
  padding: 4vh;
  margin-top: 5vh;
  display: 'flex'
  width:100%
`;

export default function () {
  const [imagePaths, setImagePaths] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState('');
  const { token, user } = isAutheticated();
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const handleUpload = e => {
    e.preventDefault();

    const fd = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      fd.append(`images`, selectedFiles[i]);
    }

    Axios.post(`${API}/api/images/upload/${user._id}`, fd, config).then(
      response => {
        setImagePaths(response.data);
      },
      error => {
        console.log(error);
      }
    );
  };

  const handleCSVUpload = e => {
    e.preventDefault();

    const fd = new FormData();

    fd.append(`csvFile`, selectedFiles[0]);
    fd.append(`shopName`, 'Chitlangi');
    fd.append(`shopId`, '5f0344fe722f505f9b39c1bf');

    Axios.post(`${API}/api/products/bulkUpload/${user._id}`, fd, config).then(
      response => {
        console.log(response.data);
      },
      error => {
        console.log(error);
      }
    );
  };

  const handleChange = name => event => {
    setSelectedFiles(event.target.files);
  };
  if (imagePaths.length) console.log(`${API}${imagePaths[0].split('public')[1]}`);
  return (
    <Container>
      <div style={{ display: 'flex', width: '100%', margin: 'auto' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ margin: 'auto' }}>
            <input id="file" onChange={handleChange('file')} type="file" multiple />

            <button type="submit" onClick={handleUpload}>
              upload
            </button>
          </div>
        </div>
        <div style={{ height: '400px', backgroundColor: '#FFFAFA', overflow: 'scroll', width: '50%', margin: 'auto' }}>
          {imagePaths.map((path, index) => {
            return (
              <div key={index}>
                <div>
                  <img style={{ height: '200px' }} src={`${API}${path.split('public')[1]}`} alt="" />
                </div>

                <div>{path}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <input id="file" onChange={handleChange('file')} type="file" multiple />
      </div>
      <div>
        <button type="submit" onClick={handleCSVUpload}>
          upload
        </button>
      </div>
    </Container>
  );
}
