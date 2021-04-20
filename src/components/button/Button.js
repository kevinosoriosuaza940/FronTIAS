import React from "react";
import { Button } from 'reactstrap';
import './Button.css'
import { useHistory } from 'react-router-dom';

export default function CustomButton({ title, color, route }){
    const history = useHistory()
    const redirectTo = () => {
        history.push(route)
    }
    return (
        <div>
            <Button
                className="custom_button"
                color={color} size="lg"
                block
                onClick={redirectTo}>
                    {title}
            </Button>
        </div>
    )
}
