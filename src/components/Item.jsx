import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'animate.css';
import useCounter from '../hooks/useCounter';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {



    return (
        <  >
            <Link to={`/product/${product.id}`} >


                <Card className='colordeclick' >
                    <Card.Img variant="top" src={product.img} />
                    <Card.Text >




                        <Card.Text> stock: {product.stock}
                        </Card.Text>
                        <Card.Body  >
                            <Card.Title>{product.nombre}</Card.Title>
                            <Card.Text>
                                ${product.precio}

                            </Card.Text >


                        </Card.Body>

                    </Card.Text>
                </Card>



            </Link>

        </>
    );
}

export default Item;
