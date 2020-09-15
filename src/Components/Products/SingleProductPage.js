import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Productpage.module.css';
import useWindowDimensions from '../../customapis/useWindowDimensions';
import Addtocart from '../Buttons/Addtocart';
import Addtowishlist from '../Buttons/Addtowishlist';
import Carousel from 'react-bootstrap/Carousel';
import API from '../../backend';
import Axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import UpLoader from '../Loader/UpLoader';

const OneSize = styled.div`
  color: #ff5a5a;
  margin-top: 1vh;
  padding-left: 18px;
`;

const Discount = styled.span`
  display: inline-block;
  font-weight: 500;
  color: #ff5a5a;
  margin-left: 1vh;

  @media (min-width: 990px) {
    color: #ff905a;
  }
`;

const MarkedPrice = styled.span`
  display: inline-block;
  color: #94969f;
  margin-left: 1vh;
`;
const Taxes = styled.span`
  @media (min-width: 990px) {
    font-size: 15px;
  }
  font-size: 14px;
  color: #03a685;
  font-weight: 500;
  margin-bottom: 4px;
`;
const DetailsWrapper = styled.div`
  @media (max-width: 990px) {
    font-size: 14px;
  }

  @media (min-width: 990px) {
    margin-top: 25px;
    margin-bottom: 5px;
  }

  font-weight: 500;
  font-size: 25px;
`;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const SingleProductpage = props => {
  const { productId } = props.match.params;

  const [data, setData] = useState(0);
  const selectClasses = useStyles();
  const [variant, setVariant] = React.useState('');
  const { width } = useWindowDimensions();
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    const loadandsetdata = async () => {
      const response = await Axios.get(`${API}/api/product/${productId}`);
      if (mounted) {
        window.scroll(0, 0);
        setData(response.data.product);
        setVariant(response.data.product._id);
        if (index + 1 > response.data.product.photos.length) {
          setIndex(0);
        }
        console.log(response.data.product);
      }
    };
    loadandsetdata();
    return () => {
      mounted = false;
    };
  }, [productId]);

  const VariantList = () => {
    return data.variants.map((variant, index) => {
      return (
        <MenuItem key={index} value={variant.product}>
          {variant.size ? 'Size:' + variant.size : ''} {variant.color ? 'Color:' + variant.color : ''}
        </MenuItem>
      );
    });
  };

  const Thumbnails = images => {
    return images.map((image, index) => {
      return (
        <div key={index} className={classes.thumbnail}>
          <img className={classes.thumbnailImg} onClick={() => handleSelect(index)} src={API + image.substr(6)} alt="" />
        </div>
      );
    });
  };

  const CarouselImages = images => {
    return images.map((image, index) => {
      return (
        <Carousel.Item
          key={index}
          onClick={() => {
            if (width <= 990) {
              props.history.push({ pathname: '/full-image-view', state: { photos: data.photos, index } });
            }
          }}
        >
          <img className={classes.image} src={API + image.substr(6)} alt={`Second slide`} />
        </Carousel.Item>
      );
    });
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleChange = event => {
    props.history.replace(`/productpage/${event.target.value}`);
  };

  const handleClose = name => {
    setOpen(false);
  };

  const handleOpen = name => {
    setOpen(true);
  };

  const { _id } = data;

  return (
    <>
      {data ? (
        <>
          <div style={{ minHeight: '1000px' }}>
            {' '}
            {width > 990 && <div className={classes.navbar}></div>}
            <div className={classes.container}>
              <div className={classes.col60}>
                {width > 990 && <div className={classes.thumbnails}>{Thumbnails(data.photos)}</div>}
                <div className={classes.imgbox}>
                  <div className={classes.imageContainer}>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                      {CarouselImages(data.photos)}
                    </Carousel>
                    {/* <img className={classes.image} src={productImage} alt="" /> */}
                  </div>
                </div>
              </div>

              <div className={classes.col40}>
                <div className={classes.col100}>
                  <div className={classes.productTitle}>
                    <h3 className={classes.productname}>{data.name}</h3>

                    <div>
                      <DetailsWrapper>
                        <span>Rs:{data.price}</span>
                        <MarkedPrice>
                          <strike>Rs:{data.markedPrice}</strike>
                        </MarkedPrice>
                        <Discount>({Math.ceil(((data.markedPrice - data.price) / data.markedPrice) * 100)}%) OFF</Discount>
                      </DetailsWrapper>
                      <Taxes>inclusive of all taxes</Taxes>
                    </div>
                  </div>
                  <div className={classes.card}>
                    {data.variants.length ? (
                      <FormControl className={selectClasses.formControl}>
                        <InputLabel id="demo-controlled-open-select-label">Variants</InputLabel>
                        <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={open} onClose={handleClose} onOpen={handleOpen} value={variant} onChange={handleChange}>
                          {VariantList(data.variants)}
                        </Select>
                      </FormControl>
                    ) : (
                      <OneSize>One Size</OneSize>
                    )}

                    <div className={classes.buttonWrapper}>
                      <div className={classes.buttonContainer}>
                        {width > 990 && (
                          <Addtocart classes={`m-2 btn btn-primary ${classes.addToCart}`} id={_id}>
                            ADD TO CART
                          </Addtocart>
                        )}

                        <Addtowishlist classes={`btn btn-outline-primary ${classes.addToWishlist}`} id={_id}>
                          WISHLIST
                        </Addtowishlist>

                        {width <= 990 && (
                          <Addtocart classes={`m-2 btn btn-primary ${classes.addToCart}`} id={_id}>
                            ADD TO CART
                          </Addtocart>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <UpLoader />
      )}
    </>
  );
};

export default withRouter(SingleProductpage);
