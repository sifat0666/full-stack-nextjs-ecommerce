import React from 'react'

function Notification() {
  return (
    <div>Notification</div>
  )
}

export default Notification



// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import PropTypes from 'prop-types';

// export { NavLink };

// NavLink.propTypes = {
//     href: PropTypes.string.isRequired,
//     exact: PropTypes.bool
// };

// NavLink.defaultProps = {
//     exact: false
// };

// function NavLink({ href, exact, children, ...props }: {
//     href: string

// }) {
//     const { pathname } = useRouter();
//     const isActive = exact ? pathname === href : pathname.startsWith(href);

//     if (isActive) {
//         props.className += ' active';
//     }

//     return (
//         <Link href={href}>
//             <a {...props}>
//                 {children}
//             </a>
//         </Link>
//     );
// }