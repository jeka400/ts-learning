import * as React from "react";

interface MySectionProps {
    children: React.ReactNode;
    className?: string;
}

class MySection extends React.Component<MySectionProps> {
    render() {
        const { className, children } = this.props;

        return (
            <section className={className}>
                <h2>My Section</h2>
                { children }
            </section>
        )
    }
}

export default MySection;