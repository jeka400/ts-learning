import * as React from "react";
import { Button } from "react-bootstrap";

interface IMyButtonProps {
    dis?: boolean; 
    children?: React.ReactNode;
}

const MyButton: React.FC<IMyButtonProps> = ({ dis, children }) => {
    return (
        <Button disabled={dis}>
            {children}
        </Button>
    );
};

const PrimaryButton: React.FC<IMyButtonProps> = ({ dis, children }) => {
    return (
        <Button variant="primary" disabled={dis}>
            {children}
        </Button>
    );
};

const SecondaryButton: React.FC<IMyButtonProps> = ({ dis, children }) => {
    return (
        <Button variant="secondary" disabled={dis}>
            {children}
        </Button>
    );
};

const SuccessButton: React.FC<IMyButtonProps> = ({ dis, children }) => {
    return (
        <Button variant="success" disabled={dis}>
            {children}
        </Button>
    );
};

const DangerButton: React.FC<IMyButtonProps> = ({ dis, children }) => {
    return (
        <Button variant="danger" disabled={dis}>
            {children}
        </Button>
    );
};

const WarningButton: React.FC<IMyButtonProps> = ({ dis, children }) => {
    return (
        <Button variant="warning" disabled={dis}>
            {children}
        </Button>
    );
};

const InfoButton: React.FC<IMyButtonProps> = ({ dis, children }) => {
    return (
        <Button variant="info" disabled={dis}>
            {children}
        </Button>
    );
};

interface IMyButtonComponent extends React.FC<IMyButtonProps> {
    Primary: typeof PrimaryButton;
    Secondary: typeof SecondaryButton;
    Success: typeof SuccessButton;
    Danger: typeof DangerButton;
    Warning: typeof WarningButton;
    Info: typeof InfoButton;
}

const MyButtonWithStatics = MyButton as IMyButtonComponent;

MyButtonWithStatics.Primary = PrimaryButton;
MyButtonWithStatics.Secondary = SecondaryButton;
MyButtonWithStatics.Success = SuccessButton;
MyButtonWithStatics.Danger = DangerButton;
MyButtonWithStatics.Warning = WarningButton;
MyButtonWithStatics.Info = InfoButton;

export default MyButtonWithStatics;
