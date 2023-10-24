'use client'

interface ButtonProps {
    label: string;
    onClick: () => void;
    type?: 'primary' | 'secondary';
}

const DefaultButton: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = 'primary',
}) => {
    let classNames = "w-48 h-14 px-5 py-5 rounded-[30px] border justify-center items-center gap-2.5 inline-flex";

    switch (type) {
        case 'primary':
            classNames += " bg-orange-500 border-orange-500";
            break;
        case 'secondary':
            classNames += " border-sky-500";
            break;
    }

    return (
        <button onClick={onClick} className={classNames}>
            <div className="custom-font text-white text-base font-bold text-[15px]">{label}</div>
        </button>
    );
};

export default DefaultButton;