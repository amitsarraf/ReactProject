import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import NavbarMenu from './NavbarMenu'



class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(id) {
        fetch('http://localhost:3000/restaurant/' + id,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }).then((result) => {
                result.json().then((response) => {
                    alert("Restaurant Has Been Deleted")
                    this.getData()

                })
            }
            )
    }
    render() {
        return (
            <div>
                <NavbarMenu />
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Rating</th>
                                        <th>Location</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td><Link to={"/Update/" + item.id}><FontAwesomeIcon icon={faEdit} color="blue" /></Link>
                                                    <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="green" /></span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default RestaurantList;