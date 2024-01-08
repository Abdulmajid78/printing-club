import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <footer className="col-12">
                            <ul className="nav justify-content-center gap-5 pb-3 mb-3">
                                <li className="nav-item">
                                    <a href="#"
                                       className="nav-link px-2 ">
                                        Home</a></li>
                                <li className="nav-item">
                                    <a href="#"
                                       className="nav-link px-2 ">
                                        Our story</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#"
                                       className="nav-link px-2 ">
                                        Apply now</a></li>
                                <li className="nav-item">
                                    <a href="#"
                                       className="nav-link px-2 ">
                                        Contact us</a></li>
                            </ul>

                            <ul className="nav justify-content-center gap-2 pb-3 mb-3">
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23"
                                             viewBox="0 0 24 23" fill="none">
                                            <path
                                                d="M17 1.84619H7C4.23858 1.84619 2 3.91257 2 6.46158V15.6923C2 18.2414 4.23858 20.3077 7 20.3077H17C19.7614 20.3077 22 18.2414 22 15.6923V6.46158C22 3.91257 19.7614 1.84619 17 1.84619Z"
                                                stroke="#242424" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path
                                                d="M16 10.4954C16.1234 11.2637 15.9813 12.0483 15.5938 12.7376C15.2063 13.427 14.5931 13.986 13.8416 14.3351C13.0901 14.6843 12.2384 14.8058 11.4078 14.6825C10.5771 14.5591 9.80976 14.1971 9.21484 13.6479C8.61992 13.0987 8.22773 12.3904 8.09407 11.6236C7.9604 10.8569 8.09207 10.0707 8.47033 9.37701C8.84859 8.6833 9.45419 8.11735 10.201 7.75966C10.9478 7.40197 11.7978 7.27075 12.63 7.38467C13.4789 7.50087 14.2649 7.86602 14.8717 8.42618C15.4785 8.98634 15.8741 9.71182 16 10.4954Z"
                                                stroke="#242424" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M17.5 6H17.51" stroke="#242424" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23"
                                             viewBox="0 0 24 23" fill="none">
                                            <path
                                                d="M18 1.84619H15C13.6739 1.84619 12.4021 2.33245 11.4645 3.19801C10.5268 4.06356 10 5.2375 10 6.46158V9.23081H7V12.9231H10V20.3077H14V12.9231H17L18 9.23081H14V6.46158C14 6.21676 14.1054 5.98197 14.2929 5.80886C14.4804 5.63575 14.7348 5.5385 15 5.5385H18V1.84619Z"
                                                stroke="#242424" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23"
                                             viewBox="0 0 24 23" fill="none">
                                            <g clip-path="url(#clip0_1_67)">
                                                <path
                                                    d="M18.0594 5.27538L8.18901 10.887C7.63045 11.2053 7.36612 11.8339 7.54607 12.4154L8.61333 15.8769C8.7045 16.172 8.98903 16.3682 9.31641 16.3682C9.33464 16.3682 9.35306 16.3676 9.37153 16.3664C9.7215 16.3429 9.99844 16.1023 10.045 15.7816L10.3225 13.8835C10.3599 13.6282 10.4932 13.3906 10.6975 13.215L18.8428 6.22601C19.0889 6.01533 19.1214 5.67034 18.9186 5.42358C18.7155 5.1766 18.3463 5.11273 18.0594 5.27538ZM10.0463 12.5688C9.68025 12.8833 9.4418 13.3082 9.37486 13.7654L9.24028 14.6861L8.46558 12.1734C8.40262 11.9698 8.49534 11.7497 8.69081 11.6383L15.9217 7.52746L10.0463 12.5688Z"
                                                    fill="#242424"/>
                                                <path
                                                    d="M23.6093 1.61737C23.3009 1.3761 22.8753 1.30968 22.4984 1.44407L0.706609 9.20406C0.275031 9.35771 -0.00246858 9.73281 -0.00026545 10.1597C0.00198455 10.5869 0.283563 10.9599 0.717672 11.1101L5.80783 12.8637L7.79341 18.7581C7.90244 19.0821 8.17764 19.3339 8.52948 19.4316C8.88114 19.5292 9.26092 19.4594 9.5448 19.2451L12.5045 17.0179C12.6466 16.911 12.8496 16.9057 12.998 17.0052L18.3362 20.5827C18.5283 20.7116 18.7549 20.7779 18.9842 20.7779C19.1185 20.7779 19.2537 20.7551 19.3834 20.7088C19.7343 20.5836 19.9895 20.3059 20.0659 19.9662L23.9767 2.60187C24.0588 2.23625 23.918 1.85903 23.6093 1.61737ZM23.0405 2.42252L19.1298 19.7868C19.1156 19.8496 19.0667 19.8756 19.0388 19.8856C19.0106 19.8957 18.9551 19.9068 18.8983 19.8686L13.5598 16.2909C13.3212 16.131 13.0406 16.0516 12.7605 16.0516C12.455 16.0516 12.1499 16.1461 11.9005 16.3337L8.94016 18.5614C8.88747 18.6012 8.83276 18.5941 8.80492 18.5863C8.77689 18.5786 8.72687 18.5565 8.70653 18.4961L6.6513 12.3949C6.60737 12.2645 6.5005 12.1602 6.36194 12.1124L1.05264 10.2833C0.973141 10.2559 0.956219 10.1986 0.955984 10.1554C0.95575 10.1125 0.972063 10.0556 1.05081 10.0275L22.8427 2.26757C22.8428 2.26753 22.8429 2.26749 22.843 2.26744C22.9138 2.24222 22.9662 2.27121 22.9911 2.29068C23.0162 2.31037 23.056 2.35364 23.0405 2.42252Z"
                                                    fill="#242424"/>
                                                <path
                                                    d="M20.0382 10.9102C19.7801 10.8584 19.5256 11.0096 19.4696 11.2478L19.3969 11.5568C19.3409 11.795 19.5047 12.03 19.7627 12.0817C19.7969 12.0885 19.831 12.0918 19.8646 12.0918C20.0847 12.0918 20.2827 11.9507 20.3314 11.744L20.4041 11.4351C20.46 11.1969 20.2962 10.9619 20.0382 10.9102Z"
                                                    fill="#242424"/>
                                                <path
                                                    d="M19.56 12.9428C19.3017 12.891 19.0473 13.0422 18.9914 13.2804L17.8917 17.9557C17.8357 18.1939 17.9995 18.4289 18.2575 18.4806C18.2917 18.4874 18.3258 18.4907 18.3594 18.4907C18.5795 18.4907 18.7775 18.3496 18.8262 18.143L19.9258 13.4677C19.9818 13.2295 19.818 12.9945 19.56 12.9428Z"
                                                    fill="#242424"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_67">
                                                    <rect width="24" height="22.1538" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                            </ul>

                            <p className="col-3 mx-auto text-center">902 W.Main Street Teutopokis, Il 62467
                                217.857.3153</p>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;