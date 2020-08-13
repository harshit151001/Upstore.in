import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Addressmodal from '../../Components/Modals/Addressmodal';
import API from '../../backend';
import { isAutheticated } from '../../auth/helper/index';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 80%;
@media  (min-width: 990px) {
 margin-left: 250px;
}
}
`;
const Addressform = (props) => {
  const { token, user } = isAutheticated();
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [values, setValues] = useState({
    name: '',
    phoneNumber: '',
    building: '',
    address: '',
    error: '',
    loading: false,
    didRedirect: false,
  });

  useEffect(() => {
    let mounted = true;
    const { token, user } = isAutheticated();
    const loadData = async () => {
      fetch(`${API}/api/user/${user._id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          response.json().then(function (data) {
            const { adresses, name, phoneNumber } = data;
            setValues((values) => {
              return { ...values, name, phoneNumber };
            });
            setData(adresses);
          });
        })
        .catch((err) => console.log(err));

      if (mounted) {
        window.scroll(0, 0);
      }
    };

    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  // const deleteHandler = index => {
  //   let newAddressArray = data;
  //   newAddressArray.splice(index, 1);

  //   fetch(`${API}/api/user/${user._id}`, {
  //     method: 'PUT',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`
  //     },
  //     body: JSON.stringify({ adresses: newAddressArray })
  //   })
  //     .then(response => {
  //       response.json().then(function (data) {
  //         console.log(data);
  //         setData(data.adresses);
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  const onSubmit = (event) => {
    event.preventDefault();
    if (building && address && name && phoneNumber) {
      console.log([
        ...data,
        `${building}, ${address}, CONTACT:${name}-> ${phoneNumber}`,
      ]);
      setShow(false);
      setValues({ ...values, error: false, loading: true });
      fetch(`${API}/api/user/${user._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          adresses: [
            ...data,
            `${building}, ${address}, CONTACT:${name}-> ${phoneNumber}`,
          ],
        }),
      })
        .then((response) => {
          response.json().then(function (data) {
            console.log(data);
            setData(data.adresses);
          });
        })
        .catch((err) => console.log(err));
    } else {
      setValues({ ...values, error: 'You cannot leave any field empty!' });
    }
  };

  const { name, phoneNumber, building, address, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  console.log(data);
  return (
    <>
      <Wrapper style={{ display: 'block' }}>
        <Addressmodal
          show={show}
          onHide={() => {
            setShow(false);
          }}
        >
          <form>
            <div>{error}</div>
            <div>
              <label htmlFor="InputName">CONTACT PERSON NAME</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange('name')}
                value={name || ''}
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputContact">CONTACT DETAIL</label>
              <input
                onChange={handleChange('phoneNumber')}
                value={phoneNumber}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputBuilding">FLAT,FLOOR,BUILDING NAME*</label>
              <input
                onChange={handleChange('building')}
                value={building || ''}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputAddress">ADDRESS*</label>
              <input
                onChange={handleChange('address')}
                value={address}
                type="text"
                className="form-control"
              />
            </div>

            <button onClick={onSubmit} className="btn btn-primary">
              Submit
            </button>
            <p>{JSON.stringify(values)}</p>
          </form>
        </Addressmodal>
        <Row>
          <Col lg={6} style={{ margin: 'auto', justifyContent: 'center' }}>
            {/* {data.map((address, index) => {
              return (
                <div key={index}>
                  <Card
                    style={{
                      boxShadow: 'white 1px 1px 0px,rgba(0,0,0,0.3) 2px 0px 13px, rgba(0,0,0,0.3) 4px 10px 21px',
                      margin: '2vw'
                    }}
                  >
                    <button
                      onClick={() => {
                        deleteHandler(index);
                      }}
                    >
                      delete
                    </button>

                    <p>{address}</p>
                  </Card>
                </div>
              );
            })} */}
          </Col>
        </Row>
        <button onClick={() => setShow(true)}>Add new Address</button>
      </Wrapper>
    </>
  );
};

export default Addressform;
