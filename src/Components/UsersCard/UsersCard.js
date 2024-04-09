import Image from "next/image";


const UsersCard = ({ user, setUserDetails, i, active }) => {
    const { avatar, profile } = user;
    const { index, setIndex } = active;

    const myLoader = () => {
        return `${avatar}`;
    }

    return (
        <div
            onClick={() => {
                setUserDetails(user)
                setIndex(i)
            }}
            style={{ cursor: 'pointer' }}
            className={`${index === i && 'active'} d-flex align-items-center border rounded mb-3 p-1`}>
            <div
                style={{ width: '40px' }}
                className="image me-3">
                <Image loader={myLoader} src={`${avatar}`} width={50}
                    height={50} alt="po" className="rounded-circle" />
            </div>
            <h5 className='name m-0'>{profile?.firstName} {profile?.lastName}</h5>
        </div>
    );
};

export default UsersCard;