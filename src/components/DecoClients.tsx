import {DecoClient} from "../services/deco-client";
import {Badge, ListGroup} from "react-bootstrap";
import React, {useEffect, useState} from "react";

function DecoClients() {

    const decoClient = new DecoClient('http://localhost:8080')
    let [ clients, setClients ] = useState([])

    const fetchLatest = () => {
        return decoClient.getLatestState()

    }

    useEffect(() => {
        fetchLatest().then(res => setClients(res.clients))
    });

    return (
        <ListGroup as="ol" numbered>
            {
                clients.map((item: any) => {
                   return <ListGroup.Item
                              as="li"
                              className="d-flex justify-content-between align-items-start"
                   >
                       <div className="ms-2 me-auto">
                           <div className="fw-bold">{item.name}</div>
                           {item.ip}
                       </div>
                       <Badge {... {variant: "primary"}} pill>
                           {item.floor}
                       </Badge>
                   </ListGroup.Item>
                })
            }
        </ListGroup>
    );
}

export default DecoClients