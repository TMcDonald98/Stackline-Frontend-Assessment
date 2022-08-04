import Logo from '../stackline_logo.svg'

//logo supplied was fullname vs just the 'S' in the example. Not sure if you wanted custum, but In just used provided svg...
export const Banner = () => {
    return (
        <div style={{
            display:'flex', 
            alignItems: 'center',
            padding: '0 24px',
            background: '#132848',
            height: 70
        }}>
            <img style={{height: 30}} src={Logo} alt="logo" />
        </div>
    );
}