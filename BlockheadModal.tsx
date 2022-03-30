import {Button} from "@chakra-ui/react";
import {Modal} from "react-bootstrap";
import React from "react";

export const BlockheadModal = ({blockhead}) => {
    const [selectedBlockhead, setSelectedBlockhead] = React.useState({});

    return (
        <>
            {blockhead.attributes ? (
                <>
                    <Button
                        onClick={() => setSelectedBlockhead(blockhead)}
                        loadingText="Loading"
                        colorScheme="darkslategray"
                        variant="outline"
                        spinnerPlacement="start"
                        size="lg"
                    >
                        View Details
                    </Button>
                    <Modal show={selectedBlockhead.nameDomain === blockhead.nameDomain} onHide={() => setSelectedBlockhead({})} centered size="lg">
                        <Modal.Header closeButton>
                            <Modal.Title>{blockhead.nameDomain} - {blockhead.attributes.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="baseClassEvenSpread" style={{ margin: '15px' }}>
                                <div style={{ width: '284px', marginLeft: '3%', marginBottom: '20px'}}>
                                    <img className="headImage" src={blockhead.image} alt={blockhead.nameDomain} height="200px" width="200px"/>
                                    <h5 style={{fontSize: '13px'}}>{blockhead.attributes.description}</h5>
                                </div>
                                <div style={{ fontSize: '11px', width: '370px', marginLeft: '3%'}}>
                                    {blockhead.attributes.traits.map(trait => (
                                        <div style={{ borderBottom: '1px solid gray', padding: '5px 0'}}>
                                            <span>{trait.trait_type}: {trait.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                colorScheme="darkslategray"
                                variant="outline"
                                size="lg"
                                onClick={() => setSelectedBlockhead({})}
                            >
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ): <div style={{ height: '48px'}}/>}
        </>
    )
}