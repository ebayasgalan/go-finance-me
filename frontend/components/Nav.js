import Link from 'next/link';
import { Mutation } from 'react-apollo';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => (
  <User>
    {({ data: { me } }) => {
      return (
        <NavStyles>
          <Link href='/items'>
            <a>Shop</a>
          </Link>
          {me && (
            <>
              <Link href='/sell'>
                <a>Create</a>
              </Link>
              <Link href='/orders'>
                <a>Campaigns</a>
              </Link>
              <Link href='/me'>
                <a>Account</a>
              </Link>
              <Signout />
            </>
          )}
          {!me && (
            <Link href='/signup'>
              <a>Signin</a>
            </Link>
          )}
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
