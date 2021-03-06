//Navigation Bar

import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Home
      </Link>
      <Link href="/search" className="item">
        Search
      </Link>
      <Link href="/history" className="item">
        History
      </Link>
    </div>
  );
};

export default Header;
