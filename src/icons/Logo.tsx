import React from 'react'

type Props = {
  className?: string
  color?: 'green' | 'white'
}

const LogoIcon = ({ className, color = 'green' }: Props) => {
  const _color = color === 'green' ? '#01B052' : '#fff'

  return (
    <svg className={className} width="208" height="85" viewBox="0 0 208 85" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M105.071 51.3615C106.066 51.315 107.652 51.7022 108.709 51.7796C110.202 51.888 111.71 51.7796 113.203 51.7951L113.109 53.4211C110.404 53.8083 107.574 53.5915 105.086 53.0185L105.071 51.3615ZM84.0803 31.307L84.0026 34.5591C84.0026 34.652 84.0026 34.7604 84.0026 34.8533V37.8886H85.091C84.7955 42.0234 82.2611 56.317 80.784 61.6597L83.4638 56.7455C84.6144 52.905 84.5157 51.0053 84.9355 48.7443C85.2775 46.9015 85.573 45.0122 85.8839 43.2003L86.7858 37.7492C86.8013 37.7182 86.8324 37.6408 86.8635 37.5943L91.1394 37.8731C91.668 38.5545 91.6214 38.539 92.3677 39.0655C91.8857 39.8553 91.5436 40.4593 91.5747 41.5278C93.7204 42.7512 93.3784 41.7291 98.4316 45.198C101.588 47.3661 104.247 47.8771 104.822 49.4102C104.356 49.8593 103.765 49.6425 103.796 50.4168C103.874 52.2597 103.438 54.149 104.62 54.2419L102.676 61.6287L103.672 61.0953L105.988 54.6445C107.621 55.202 110.808 55.3724 112.332 54.9542L115.227 60.1067L116.021 61.2931C115.259 59.2024 113.654 55.0781 113.654 54.9233C113.84 54.1025 114.649 55.5272 114.618 51.888C114.618 51.8106 114.618 51.7331 114.618 51.6402C114.587 49.9213 114.462 50.8969 113.623 50.0142C113.187 49.5651 113.731 49.3328 114.555 49.1934C115.644 49.0076 116.546 48.7288 117.556 48.5585C120.355 47.5829 123.558 45.8949 127.212 45.7555C127.43 44.7334 127.243 43.7733 126.901 42.999C127.492 43.0609 127.71 43.1074 128.176 42.8751C128.44 41.4504 127.818 40.3509 127.212 39.4836C124.818 36.0148 126.73 37.2072 124.522 33.0105C123.776 31.5857 124.833 32.3446 125.253 29.8048C125.937 25.701 124.538 25.128 120.868 26.0572C117.51 26.9244 119.795 27.6368 114.027 25.6391L114.167 24.4776C132.079 24.7409 130.757 12.6927 125.237 0.505173C122.858 0.164479 108.6 4.54704 104.371 4.96516C101.93 5.21294 94.1869 1.66663 90.7351 0.67552C86.8013 -0.454964 83.0386 -0.563367 81.3127 3.52496C80.6285 5.13551 80.2865 4.56253 78.8871 5.55364C75.0466 8.2637 74.4868 12.8631 76.3682 16.8895C77.3478 18.3142 78.063 19.0885 79.6334 19.8473C81.0794 20.5442 83.4117 21.2101 84.3913 19.7853C85.8373 17.6792 83.2096 12.414 89.5068 12.4295C87.0656 17.1063 86.3815 23.1923 85.7751 31.3225C85.3397 31.3844 84.5934 31.307 84.0803 31.307ZM85.6974 34.3732L85.7129 32.8556L94.7622 33.2892C95.0731 34.5281 92.7875 35.1011 91.9479 36.3555L85.6818 35.9218V34.3732H85.6974ZM103.811 32.5149C103.687 30.5946 106.797 30.0216 107.683 32.2671C105.926 31.7096 105.631 31.4928 103.811 32.5149ZM113.296 32.8556C113.763 32.0194 114.571 31.6167 115.659 31.9264C116.655 32.2052 116.997 32.8246 117.059 34.048C116.126 33.2273 115.986 32.5149 113.296 32.8556ZM102.77 26.9089C102.521 27.2342 100.018 29.2783 99.7533 27.8846C99.5511 26.8935 99.4112 25.4068 100.282 25.3913C101.059 25.3758 102.443 26.1966 102.77 26.9089ZM119.702 28.9376C120.759 28.1943 121.63 27.7607 123.092 27.9775C123.263 29.2473 122.781 30.2849 122.112 30.9508C121.568 30.6875 119.966 29.4641 119.702 28.9376ZM102.148 12.7237C101.883 10.8499 102.552 9.65745 103.811 9.08446C104.48 8.77474 105.32 8.68183 106.144 8.89863L107.341 9.51807C107.605 9.75036 107.45 9.5955 107.605 9.84328C106.595 10.2924 105.537 10.0756 104.262 10.7415C102.785 11.5158 103.018 12.2746 102.148 12.7237ZM109.098 36.851C108.756 36.278 106.843 34.683 108.492 34.2648C109.658 33.9706 111.415 34.2958 112.145 35.0237C112.099 36.278 111.228 36.309 110.513 37.0523C110.684 38.8332 112.285 40.1186 113.731 40.7225C117.292 42.1937 117.152 39.4372 118.785 39.7624C120.106 42.8906 111.71 43.7423 109.72 38.8487C108.88 39.2668 108.523 39.8708 107.357 40.4283C102.412 42.7977 99.2091 38.8332 100.313 37.8576C101.883 37.2227 101.028 40.2115 104.993 39.7469C106.921 39.5456 108.647 38.3067 109.098 36.851ZM82.8209 3.95857C84.7334 -1.63191 95.4774 4.1444 99.2246 5.27489C95.6951 6.01822 86.3504 2.37899 82.8209 3.95857ZM78.2341 16.8895C75.342 13.2502 77.1612 8.38759 80.0999 6.57572C83.5206 4.46961 89.0558 5.30586 93.0674 6.11114C98.074 7.13322 101.541 7.05579 106.564 6.11114L118.909 3.32364C120.293 6.96287 122.858 7.1487 126.155 7.2571C132.001 28.566 107.916 22.929 105.18 19.7699C107.046 22.449 110.886 23.3471 112.643 24.0905L112.534 25.2984C110.606 25.3294 108.74 24.9577 106.486 25.2364C105.273 25.3913 105.149 25.763 104.216 25.0816C103.532 24.5705 103.205 24.3228 102.319 23.9201C97.1878 21.5662 96.8923 24.1679 97.7319 29.6345C96.6902 30.3469 96.7213 30.765 95.835 31.7871L87.3455 31.3225C87.0967 23.8582 89.1336 16.7965 91.2171 12.383C92.0878 12.3985 93.2695 12.7082 94.2024 12.5843C95.4774 12.414 95.7106 11.299 94.0003 11.0667C91.0305 10.8808 87.8897 10.3853 85.5574 11.9958C84.6867 12.5998 83.9559 13.529 83.6605 14.9692C83.1474 17.5554 84.3291 19.9402 81.095 18.8562C79.9755 18.469 79.0426 17.7412 78.2341 16.8895ZM117.898 28.535C119.453 28.3801 121.552 26.5837 123.931 27.0948C124.071 28.1478 124.087 29.4022 123.729 30.3623C123.247 31.6787 122.47 31.307 122.718 32.7937C123.76 34.2958 124.211 34.9462 124.662 37.5634C125.051 39.7934 126.139 39.6075 126.606 41.342C125.75 41.2181 125.859 41.0942 125.051 41.4039C124.849 42.2557 125.082 42.4105 125.424 43.0919C126.543 45.3064 125.346 44.4082 122.314 45.3993C121.241 45.74 120.293 46.1581 119.205 46.5453L114.276 47.939C112.27 48.2797 112.441 48.2488 112.177 49.7819C111.943 51.1601 106.486 50.8659 106.097 49.2399C105.957 48.6669 105.833 47.9236 104.9 47.2886C103.827 46.5763 102.101 46.0033 100.842 45.229C98.7737 43.9591 95.6329 41.342 93.1296 40.7225C93.5027 38.7403 96.3481 38.0125 93.1762 37.3156C94.1713 35.4108 94.4668 37.0214 96.2859 33.6918C96.799 32.7627 97.0167 32.36 97.6231 31.5548C98.2295 30.7495 98.6649 30.4553 99.2402 29.7584C99.0847 28.4576 98.3694 27.0793 98.9914 24.4776C101.23 23.9356 103.298 27.0793 105.071 26.816C106.035 26.6767 106.766 26.5063 107.839 26.4444C110.42 26.2895 116.515 27.1877 117.898 28.535Z" fill={_color} />
      <path fillRule="evenodd" clipRule="evenodd" d="M105.865 51.3615C106.86 51.315 108.446 51.7022 109.503 51.7796C110.996 51.888 112.504 51.7796 113.997 51.7951L113.904 53.4211C111.198 53.8083 108.368 53.5915 105.88 53.0185L105.865 51.3615ZM84.8744 31.307L84.7966 34.5591C84.7966 34.652 84.7966 34.7604 84.7966 34.8533V37.8886H85.885C85.5896 42.0234 82.514 55.3572 81.0368 60.6999L83.4638 56.7455C84.6144 52.905 85.3097 51.0053 85.7296 48.7443C86.0716 46.9015 86.367 45.0122 86.678 43.2003L87.5798 37.7492C87.5954 37.7182 87.6265 37.6408 87.6576 37.5943L91.9334 37.8731C92.4621 38.5545 92.4154 38.539 93.1618 39.0655C92.6798 39.8553 92.3377 40.4593 92.3688 41.5278C94.5145 42.7512 94.1724 41.7291 99.2257 45.198C102.382 47.3661 105.041 47.8771 105.616 49.4102C105.15 49.8593 104.559 49.6425 104.59 50.4168C104.668 52.2597 104.232 54.149 105.414 54.2419L103.514 61.0953H103.672L106.782 54.6445C108.415 55.202 111.602 55.3724 113.126 54.9542L116.021 61.2931L116.873 61.6442C116.111 59.5536 114.448 55.0781 114.448 54.9233C114.634 54.1025 115.443 55.5272 115.412 51.888C115.412 51.8106 115.412 51.7331 115.412 51.6402C115.381 49.9213 115.256 50.8969 114.417 50.0142C113.981 49.5651 114.525 49.3328 115.35 49.1934C116.438 49.0076 117.34 48.7288 118.35 48.5585C121.149 47.5829 124.352 45.8949 128.006 45.7555C128.224 44.7334 128.037 43.7733 127.695 42.999C128.286 43.0609 128.504 43.1074 128.97 42.8751C129.234 41.4504 128.612 40.3509 128.006 39.4836C125.612 36.0148 127.524 37.2072 125.316 33.0105C124.57 31.5857 125.627 32.3446 126.047 29.8048C126.731 25.701 125.332 25.128 121.662 26.0572C118.304 26.9244 120.589 27.6368 114.821 25.6391L114.961 24.4776C132.873 24.7409 131.551 12.6927 126.031 0.505173C123.652 0.164479 109.394 4.54704 105.165 4.96516C102.724 5.21294 94.9809 1.66663 91.5292 0.67552C87.5954 -0.454964 83.8326 -0.563367 82.1067 3.52496C81.4226 5.13551 81.0805 4.56253 79.6812 5.55364C75.8407 8.2637 75.2809 12.8631 77.1623 16.8895C78.1419 18.3142 78.8571 19.0885 80.4275 19.8473C81.8735 20.5442 84.2058 21.2101 85.1853 19.7853C86.6314 17.6792 84.0037 12.414 90.3008 12.4295C87.8597 17.1063 87.1756 23.1923 86.5692 31.3225C86.1338 31.3844 85.3875 31.307 84.8744 31.307ZM86.4914 34.3732L86.507 32.8556L95.5562 33.2892C95.8672 34.5281 93.5816 35.1011 92.742 36.3555L86.4759 35.9218V34.3732H86.4914ZM109.892 36.851C109.55 36.278 107.637 34.683 109.286 34.2648C110.452 33.9706 112.209 34.2958 112.94 35.0237C112.893 36.278 112.022 36.309 111.307 37.0523C111.478 38.8332 113.079 40.1186 114.525 40.7225C118.086 42.1937 117.946 39.4372 119.579 39.7624C120.9 42.8906 112.504 43.7423 110.514 38.8487C109.674 39.2668 109.317 39.8708 108.151 40.4283C103.206 42.7977 100.003 38.8332 101.107 37.8576C102.677 37.2227 101.822 40.2115 105.787 39.7469C107.715 39.5456 109.441 38.3067 109.892 36.851ZM83.6149 3.95857C85.5274 -1.63191 96.2715 4.1444 100.019 5.27489C96.4892 6.01822 87.1445 2.37899 83.6149 3.95857ZM79.0281 16.8895C76.1361 13.2502 77.9553 8.38759 80.894 6.57572C84.3146 4.46961 89.8499 5.30586 93.8615 6.11114C98.8681 7.13322 102.335 7.05579 107.358 6.11114L119.703 3.32364C121.087 6.96287 123.652 7.1487 126.949 7.2571C132.795 28.566 108.71 22.929 105.974 19.7699C107.84 22.449 111.68 23.3471 113.437 24.0905L113.328 25.2984C111.4 25.3294 109.534 24.9577 107.28 25.2364C106.067 25.3913 105.943 25.763 105.01 25.0816C104.326 24.5705 103.999 24.3228 103.113 23.9201C97.9818 21.5662 97.6864 24.1679 98.526 29.6345C97.4843 30.3469 97.5154 30.765 96.6291 31.7871L88.1396 31.3225C87.8908 23.8582 89.9277 16.7965 92.0112 12.383C92.8819 12.3985 94.0636 12.7082 94.9965 12.5843C96.2715 12.414 96.5047 11.299 94.7944 11.0667C91.8246 10.8808 88.6838 10.3853 86.3515 11.9958C85.4808 12.5998 84.75 13.529 84.4546 14.9692C83.9415 17.5554 85.1232 19.9402 81.8891 18.8562C80.7696 18.469 79.8366 17.7412 79.0281 16.8895ZM118.403 28.2739C119.958 28.119 122.346 26.5837 124.725 27.0948C124.865 28.1478 124.881 29.4022 124.523 30.3623C124.041 31.6787 123.264 31.307 123.513 32.7937C124.554 34.2958 125.005 34.9462 125.456 37.5634C125.845 39.7934 126.933 39.6075 127.4 41.342C126.545 41.2181 126.653 41.0942 125.845 41.4039C125.643 42.2557 125.876 42.4105 126.218 43.0919C127.338 45.3064 126.14 44.4082 123.108 45.3993C122.035 45.74 121.087 46.1581 119.999 46.5453L115.07 47.939C113.064 48.2797 113.235 48.2488 112.971 49.7819C112.737 51.1601 107.28 50.8659 106.891 49.2399C106.751 48.6669 106.627 47.9236 105.694 47.2886C104.621 46.5763 102.895 46.0033 101.636 45.229C99.5678 43.9591 96.427 41.342 93.9236 40.7225C94.2968 38.7403 97.1422 38.0125 93.9703 37.3156C94.9654 35.4108 95.2608 37.0214 97.08 33.6918C97.5931 32.7627 97.8108 32.36 98.4172 31.5548C99.0236 30.7495 99.4589 30.4553 100.034 29.7584C98.7656 27.0876 99.1635 27.0793 99.7855 24.4776C102.024 23.9356 104.124 26.56 105.896 26.2967C106.86 26.1573 107.56 26.5063 108.633 26.4444C111.214 26.2895 117.019 26.9266 118.403 28.2739Z" fill={_color} />
      <path d="M14.1455 26.8612C16.3663 26.9895 18.2009 27.8877 19.6492 29.5557C21.1297 31.2237 21.87 33.7258 21.87 37.0618C21.87 39.2431 21.4033 40.9752 20.4699 42.2583C19.5365 43.5414 18.4583 44.4396 17.2353 44.9528C16.0122 45.434 14.934 45.6746 14.0007 45.6746C13.1316 45.6746 11.6672 45.7708 9.60735 45.9633C8.41649 46.0916 7.45092 46.1718 6.71066 46.2038C6.64629 49.1549 6.6141 51.1598 6.6141 52.2183C6.6141 56.3884 6.66238 58.6498 6.75894 59.0027C6.82331 59.3235 6.75894 59.6122 6.56582 59.8688C6.4049 60.0933 6.1796 60.2537 5.88993 60.3499C5.63245 60.4141 5.39106 60.398 5.16576 60.3018C5.0692 60.2697 4.79563 60.2537 4.34503 60.2537C3.37947 60.2537 2.34954 60.3179 1.25523 60.4462C0.740265 60.5103 0.402318 60.4141 0.241391 60.1575C0.0804635 59.8688 0 59.4357 0 58.8583C0 58.1526 0.0160927 57.5111 0.048278 56.9337L0.0965563 52.892L0.193112 47.2143C0.386225 40.4139 0.482781 35.1051 0.482781 31.2879C0.482781 30.1331 0.466689 29.4434 0.434503 29.2189C0.370132 28.5132 0.337947 28.0962 0.337947 27.9679C0.337947 27.1339 0.514967 26.7169 0.869006 26.7169C1.02993 26.7169 1.35179 26.7329 1.83457 26.765C2.34954 26.7971 3.05761 26.8131 3.95881 26.8131C4.21629 26.8131 4.87609 26.7971 5.93821 26.765C7.00033 26.7329 8.11073 26.7169 9.2694 26.7169C10.9752 26.7169 12.6006 26.765 14.1455 26.8612ZM12.6489 42.2102C13.8397 42.2102 14.9501 41.8574 15.9801 41.1517C17.01 40.446 17.525 39.1789 17.525 37.3505C17.525 35.3938 17.1226 33.9182 16.318 32.9238C15.5134 31.8974 14.3386 31.2398 12.7937 30.9511C10.3798 30.4699 8.48086 30.2775 7.09688 30.3737C7.09688 31.2719 7.08079 31.9455 7.04861 32.3946C6.98424 34.1909 6.90377 35.474 6.80722 36.2438C6.67847 37.3665 6.64629 38.6336 6.71066 40.045L6.80722 41.9215L9.07629 42.0659C9.94529 42.1621 11.1362 42.2102 12.6489 42.2102Z" fill={_color} />
      <path d="M48.4003 58.6178C49.2693 59.4838 49.7038 60.0773 49.7038 60.3981C49.7038 60.4622 49.6234 60.5745 49.4624 60.7349C49.1728 60.9273 48.4486 61.0236 47.2899 61.0236C46.4531 61.0236 45.9221 60.9594 45.6968 60.8311C45.4715 60.7349 45.2944 60.5584 45.1657 60.3018C45.0691 60.0452 44.9887 59.8527 44.9243 59.7244C44.8278 59.532 44.4254 58.9866 43.7174 58.0885C43.0415 57.1582 42.5265 56.4525 42.1725 55.9714C40.4666 53.7901 38.9861 51.8174 37.7309 50.0531C36.9584 48.9625 35.5262 47.086 33.4341 44.4235L32.6617 43.4612L29.3305 39.3233L29.1374 41.2479C29.0086 42.2102 28.9764 43.365 29.0408 44.7122C29.1374 45.6104 29.2017 47.936 29.2339 51.6891C29.2661 55.4421 29.2822 58.1847 29.2822 59.9169C29.2822 60.4301 29.0891 60.7509 28.7029 60.8792C28.3166 61.0396 27.866 61.1198 27.3511 61.1198C27.1258 61.1198 26.9809 61.0236 26.9166 60.8311C26.8522 60.6386 26.8039 60.4301 26.7717 60.2056C26.7717 59.981 26.7717 59.8367 26.7717 59.7725C26.7074 59.2593 26.6752 58.5055 26.6752 57.5111C26.6752 56.8695 26.6913 56.3884 26.7235 56.0676C26.7556 54.3354 26.8039 51.3202 26.8683 47.0218C26.9327 42.6914 26.9648 38.81 26.9648 35.3777C26.9648 31.6889 26.9166 29.5397 26.82 28.9302C26.7878 28.6736 26.7717 28.3368 26.7717 27.9198C26.7717 27.4386 26.8361 27.1339 26.9648 27.0056C27.1258 26.8773 27.3511 26.8131 27.6407 26.8131C28.2844 26.8131 28.9121 26.8291 29.5236 26.8612L34.7859 26.9575C36.717 26.9575 38.7286 27.2943 40.8207 27.9679C42.9127 28.6415 43.9587 29.8925 43.9587 31.7209C43.9587 33.4531 43.315 34.8004 42.0276 35.7627C40.7402 36.725 39.2919 37.3826 37.6826 37.7354C36.1055 38.0883 34.7215 38.2647 33.5307 38.2647C33.1123 38.2647 32.887 38.2487 32.8548 38.2166C33.0479 38.4091 34.3192 40.1091 36.6687 43.3169C43.7495 52.7797 47.6601 57.88 48.4003 58.6178ZM29.1856 36.292C30.2478 36.292 31.0524 36.2759 31.5995 36.2438C33.4663 36.1797 34.9146 36.0514 35.9446 35.8589C37.4251 35.6023 38.5355 35.2494 39.2758 34.8004C40.0482 34.3513 40.4344 33.6456 40.4344 32.6833C40.4344 32.0417 40.0965 31.4964 39.4206 31.0473C38.7447 30.5662 37.924 30.2133 36.9584 29.9888C36.025 29.7321 35.2043 29.6038 34.4962 29.6038C33.6916 29.5718 32.5651 29.5557 31.1168 29.5557H29.4753L29.1856 36.292Z" fill={_color} />
      <path d="M65.2275 26.2357C68.4461 26.2357 70.86 27.166 72.4692 29.0264C74.0785 30.8548 75.1084 33.0361 75.559 35.5702C76.0096 38.0722 76.2349 40.9111 76.2349 44.0867C76.2349 46.6529 75.8487 49.2993 75.0763 52.0259C74.3038 54.7204 73.1129 56.9979 71.5037 58.8583C69.8944 60.7188 67.915 61.6491 65.5655 61.6491C60.963 61.6491 57.9053 59.7244 56.3926 55.8751C54.8799 51.9938 54.1236 47.8398 54.1236 43.4131C54.1236 39.1468 54.7029 35.7306 55.8616 33.1644C57.0524 30.5982 58.4847 28.8019 60.1583 27.7754C61.8641 26.749 63.5539 26.2357 65.2275 26.2357ZM65.1792 49.4276C66.0482 49.4276 66.692 48.9465 67.1104 47.9841C67.5288 47.0218 67.738 45.867 67.738 44.5198C67.738 43.2367 67.5288 42.114 67.1104 41.1517C66.7241 40.1893 66.1931 39.7082 65.5172 39.7082C64.7126 39.7082 64.101 40.2695 63.6826 41.3922C63.2964 42.4829 63.1033 43.6697 63.1033 44.9528C63.1033 46.268 63.232 47.3426 63.4895 48.1766C63.747 49.0106 64.3102 49.4276 65.1792 49.4276Z" fill={_color} />
      <path d="M49.8183 58.6659C50.6873 59.532 51.1218 60.1254 51.1218 60.4462C51.1218 60.5103 51.0413 60.6226 50.8804 60.783C50.5907 60.9754 49.8666 61.0717 48.7079 61.0717C47.8711 61.0717 47.34 61.0075 47.1147 60.8792C46.8894 60.783 46.7124 60.6066 46.5836 60.3499C46.4871 60.0933 46.4066 59.9009 46.3423 59.7725C46.2457 59.5801 45.8434 59.0348 45.1353 58.1366C44.4594 57.2064 43.9444 56.5007 43.5904 56.0195C41.8846 53.8382 40.404 51.8655 39.1488 50.1012C38.3764 49.0106 36.9441 47.1341 34.8521 44.4717L34.0796 43.5093L30.7484 39.3714L30.5553 41.296C30.4266 42.2583 30.3944 43.4131 30.4588 44.7604C30.5553 45.6585 30.6197 47.9841 30.6519 51.7372C30.684 55.4902 30.7001 58.2328 30.7001 59.965C30.7001 60.4782 30.507 60.799 30.1208 60.9273C29.7346 61.0877 29.284 61.1679 28.769 61.1679C28.5437 61.1679 28.3989 61.0717 28.3345 60.8792C28.2701 60.6867 28.2219 60.4782 28.1897 60.2537C28.1897 60.0292 28.1897 59.8848 28.1897 59.8207C28.1253 59.3074 28.0931 58.5536 28.0931 57.5592C28.0931 56.9177 28.1092 56.4365 28.1414 56.1157C28.1736 54.3836 28.2219 51.3683 28.2862 47.0699C28.3506 42.7395 28.3828 38.8581 28.3828 35.4259C28.3828 31.737 28.3345 29.5878 28.238 28.9783C28.2058 28.7217 28.1897 28.3849 28.1897 27.9679C28.1897 27.4867 28.254 27.182 28.3828 27.0537C28.5437 26.9254 28.769 26.8612 29.0587 26.8612C29.7024 26.8612 30.33 26.8773 30.9415 26.9093L36.2038 27.0056C38.135 27.0056 40.1466 27.3424 42.2386 28.016C44.3307 28.6896 45.3767 29.9406 45.3767 31.7691C45.3767 33.5012 44.733 34.8485 43.4456 35.8108C42.1581 36.7731 40.7098 37.4307 39.1005 37.7835C37.5234 38.1364 36.1395 38.3128 34.9486 38.3128C34.5302 38.3128 34.3049 38.2968 34.2727 38.2647C34.4658 38.4572 35.7372 40.1573 38.0867 43.365C45.1675 52.8278 49.078 57.9281 49.8183 58.6659ZM30.6036 36.3401C31.6657 36.3401 32.4703 36.324 33.0175 36.292C34.8842 36.2278 36.3326 36.0995 37.3625 35.907C38.843 35.6504 39.9534 35.2976 40.6937 34.8485C41.4662 34.3994 41.8524 33.6937 41.8524 32.7314C41.8524 32.0898 41.5144 31.5445 40.8385 31.0954C40.1627 30.6143 39.3419 30.2614 38.3764 30.0369C37.443 29.7803 36.6223 29.6519 35.9142 29.6519C35.1095 29.6199 33.9831 29.6038 32.5347 29.6038H30.8933L30.6036 36.3401Z" fill={_color} />
      <path d="M134.552 28.6924C134.998 28.6924 135.816 28.6625 137.006 28.6028C138.434 28.543 139.49 28.5132 140.174 28.5132L144.904 28.6028L147.67 28.6924H150.303C152.861 28.6924 154.349 28.6625 154.765 28.6028L155.077 28.558C155.345 28.558 155.509 28.6177 155.568 28.7372C155.628 28.8268 155.657 28.9314 155.657 29.0508C155.657 29.1703 155.657 29.245 155.657 29.2749C155.657 29.3047 155.657 29.6035 155.657 30.171C155.687 30.7087 155.553 31.1866 155.256 31.6048C151.924 36.4439 149.872 39.4011 149.098 40.4765C146.956 43.5233 145.142 46.0325 143.654 48.0039L139.415 53.8288C140.248 53.9483 140.858 54.0229 141.245 54.0528C142.167 54.1723 143.238 54.232 144.458 54.232L147.001 54.1872C147.507 54.1574 148.28 54.1424 149.321 54.1424C150.154 54.1424 151.701 54.0827 153.962 53.9632L156.728 53.8736C157.085 53.8736 157.308 53.9632 157.398 54.1424C157.487 54.3217 157.532 54.5307 157.532 54.7697C157.561 55.0087 157.576 55.173 157.576 55.2626L157.487 58.5335V58.8023C157.487 59.101 157.457 59.2802 157.398 59.34C157.338 59.3997 157.16 59.4445 156.862 59.4744L155.97 59.564C155.315 59.564 154.497 59.6387 153.516 59.788C153.099 59.8478 152.237 59.8776 150.928 59.8776L147.403 59.8328C146.837 59.803 146.123 59.788 145.261 59.788H134.329C133.674 59.788 133.273 59.6984 133.124 59.5192C132.975 59.3101 132.901 59.0861 132.901 58.8471C132.93 58.5783 132.945 58.399 132.945 58.3094L133.035 56.562C133.124 55.6957 133.168 54.9639 133.168 54.3665C133.168 54.1275 133.273 53.8587 133.481 53.5599C133.689 53.2612 133.986 52.9028 134.373 52.4846L135.087 51.6781C135.89 50.6027 137.021 49.0793 138.478 47.1078C139.966 45.1065 140.888 43.7921 141.245 43.1649C141.602 42.5077 142.331 41.4622 143.431 40.0284C144.532 38.5647 145.216 37.6387 145.484 37.2504L146.019 36.5335C146.466 35.8764 147.001 34.9055 147.626 33.6211L148.429 31.8736C148.25 31.8736 148.117 31.8587 148.027 31.8288L147.135 31.7392L142.405 31.6944C141.87 31.6944 141.453 31.7094 141.156 31.7392L139.683 31.784C139.267 31.784 138.999 31.7691 138.88 31.7392C138.612 31.6795 137.556 31.6496 135.712 31.6496H133.838C133.6 31.6197 133.451 31.5749 133.392 31.5152C133.332 31.4555 133.302 31.3808 133.302 31.2912C133.332 31.2015 133.347 31.1269 133.347 31.0671C133.347 30.7385 133.302 30.1561 133.213 29.3197C133.183 29.021 133.243 28.8417 133.392 28.782C133.57 28.6924 133.778 28.6625 134.016 28.6924C134.254 28.6924 134.433 28.6924 134.552 28.6924Z" fill={_color} />
      <path d="M7.77151 75.0855L12.4485 69.2119H15.0132V82.6882H12.1184V73.704L7.77151 79.2204L3.43402 73.7416V82.6882H0.529788V69.2119H3.14171L7.77151 75.0855Z" fill={_color} />
      <path d="M20.7036 79.1265V82.6882H18.1011V73.2529H20.7036V76.8146H24.3716V73.2529H26.9836V82.6882H24.3716V79.1265H20.7036Z" fill={_color} />
      <path d="M33.7489 72.8112C32.9066 73.6633 32.4854 74.7127 32.4854 75.9595C32.4854 77.2 32.9066 78.2462 33.7489 79.0983C34.5913 79.9503 35.6159 80.3764 36.8229 80.3764C38.0361 80.3764 39.0639 79.9503 39.9063 79.0983C40.7486 78.2462 41.1698 77.2 41.1698 75.9595C41.1698 74.7127 40.7486 73.6633 39.9063 72.8112C39.0639 71.9529 38.0361 71.5238 36.8229 71.5238C35.6159 71.5238 34.5913 71.9529 33.7489 72.8112ZM31.6085 80.9214C30.1941 79.5431 29.4869 77.886 29.4869 75.9501C29.4869 74.0141 30.1941 72.3602 31.6085 70.9881C33.0291 69.616 34.7673 68.93 36.8229 68.93C38.8847 68.93 40.6229 69.616 42.0373 70.9881C43.458 72.3602 44.1683 74.0141 44.1683 75.9501C44.1683 77.886 43.458 79.5431 42.0373 80.9214C40.6229 82.2935 38.8847 82.9795 36.8229 82.9795C34.7673 82.9795 33.0291 82.2935 31.6085 80.9214Z" fill={_color} />
      <path d="M47.0676 82.6882V69.2119H56.2424V71.8151H49.9719V82.6882H47.0676Z" fill={_color} />
      <path d="M61.4613 72.8112C60.619 73.6633 60.1978 74.7127 60.1978 75.9595C60.1978 77.2 60.619 78.2462 61.4613 79.0983C62.3037 79.9503 63.3283 80.3764 64.5353 80.3764C65.7485 80.3764 66.7763 79.9503 67.6187 79.0983C68.461 78.2462 68.8822 77.2 68.8822 75.9595C68.8822 74.7127 68.461 73.6633 67.6187 72.8112C66.7763 71.9529 65.7485 71.5238 64.5353 71.5238C63.3283 71.5238 62.3037 71.9529 61.4613 72.8112ZM59.3209 80.9214C57.9065 79.5431 57.1993 77.886 57.1993 75.9501C57.1993 74.0141 57.9065 72.3602 59.3209 70.9881C60.7415 69.616 62.4797 68.93 64.5353 68.93C66.5971 68.93 68.3353 69.616 69.7497 70.9881C71.1704 72.3602 71.8807 74.0141 71.8807 75.9501C71.8807 77.886 71.1704 79.5431 69.7497 80.9214C68.3353 82.2935 66.5971 82.9795 64.5353 82.9795C62.4797 82.9795 60.7415 82.2935 59.3209 80.9214Z" fill={_color} />
      <path d="M84.6382 76.1474V77.8766H77.8774V76.1474H84.6382Z" fill={_color} />
      <path d="M92.4547 80.0944V82.6882H91.1063V73.4503H92.4547V78.3559L97.0845 73.4503H98.7347L95.1609 77.2L99.1213 82.6882H97.5749L94.2934 78.1679L92.4547 80.0944Z" fill={_color} />
      <path d="M103.077 77.3973L106.65 76.8146C106.65 76.1318 106.434 75.5773 106 75.1513C105.566 74.7252 105.01 74.5122 104.331 74.5122C103.84 74.5122 103.378 74.625 102.945 74.8505C102.517 75.0698 102.206 75.2954 102.011 75.5272L101.719 75.8561L100.851 74.9915C100.889 74.9414 100.939 74.8787 101.002 74.8036C101.071 74.7221 101.216 74.5843 101.436 74.3901C101.662 74.1896 101.898 74.011 102.143 73.8544C102.388 73.6978 102.709 73.5599 103.105 73.4409C103.507 73.3156 103.916 73.2529 104.331 73.2529C105.387 73.2529 106.261 73.5944 106.952 74.2773C107.65 74.9602 107.999 75.806 107.999 76.8146V82.6882H106.65V81.4383C106.625 81.4759 106.584 81.5291 106.528 81.5981C106.478 81.6607 106.358 81.7766 106.169 81.9458C105.987 82.1087 105.789 82.2559 105.575 82.3875C105.362 82.5128 105.079 82.6255 104.727 82.7258C104.381 82.826 104.023 82.8761 103.652 82.8761C102.728 82.8761 101.948 82.6036 101.313 82.0585C100.685 81.5135 100.37 80.8901 100.37 80.1884C100.37 79.4178 100.603 78.7976 101.068 78.3277C101.533 77.8515 102.203 77.5414 103.077 77.3973ZM103.652 81.6262C104.526 81.6262 105.242 81.3412 105.802 80.7711C106.368 80.2009 106.65 79.4616 106.65 78.5532V77.9706L103.463 78.5532C102.307 78.7725 101.725 79.3176 101.719 80.1884C101.719 80.6019 101.889 80.9465 102.228 81.2221C102.574 81.4915 103.048 81.6262 103.652 81.6262Z" fill={_color} />
      <path d="M112.624 80.0944V82.6882H111.275V73.4503H112.624V78.3559L117.253 73.4503H118.904L115.33 77.2L119.29 82.6882H117.744L114.462 78.1679L112.624 80.0944Z" fill={_color} />
      <path d="M125.089 73.4503H129.332C130.181 73.4503 130.86 73.679 131.369 74.1363C131.878 74.5874 132.133 75.1607 132.133 75.8561C132.133 76.2508 132.035 76.611 131.84 76.9368C131.652 77.2563 131.46 77.4787 131.265 77.604L130.973 77.7826C131.01 77.7951 131.064 77.8139 131.133 77.839C131.208 77.8641 131.334 77.933 131.51 78.0457C131.693 78.1522 131.85 78.2807 131.982 78.431C132.12 78.5751 132.243 78.785 132.349 79.0607C132.463 79.3363 132.519 79.6465 132.519 79.9911C132.519 80.8243 132.258 81.4821 131.737 81.9646C131.215 82.447 130.479 82.6882 129.53 82.6882H125.089V73.4503ZM129.53 78.3559H126.437V81.4383H129.53C130.058 81.4383 130.464 81.3036 130.746 81.0342C131.029 80.7648 131.171 80.3857 131.171 79.8971C131.171 79.4084 131.029 79.0294 130.746 78.76C130.464 78.4906 130.058 78.3559 129.53 78.3559ZM129.332 77.2C130.3 77.2 130.784 76.7833 130.784 75.9501C130.784 75.1168 130.3 74.7002 129.332 74.7002H126.437V77.2H129.332Z" fill={_color} />
      <path d="M145.451 73.4503V82.6882H144.093V73.4503H145.451ZM136.663 81.4383H139.002C139.605 81.4383 140.089 81.2691 140.454 80.9308C140.825 80.5862 141.01 80.1445 141.01 79.6058C141.01 79.0669 140.825 78.6284 140.454 78.2901C140.089 77.9518 139.599 77.7826 138.983 77.7826H136.663V81.4383ZM141.453 77.3785C142.057 77.9424 142.358 78.6879 142.358 79.6151C142.358 80.5361 142.06 81.2785 141.463 81.8424C140.865 82.4062 140.045 82.6882 139.002 82.6882H135.315V73.4503H136.663V76.5327H138.983C140.026 76.5327 140.85 76.8146 141.453 77.3785Z" fill={_color} />
      <path d="M154.904 73.4503V74.7002H150.076V82.6882H148.728V73.4503H154.904Z" fill={_color} />
      <path d="M163.272 80.6019C163.939 79.9127 164.272 79.0701 164.272 78.0739C164.272 77.0715 163.939 76.2289 163.272 75.546C162.612 74.8568 161.817 74.5122 160.887 74.5122C159.963 74.5122 159.167 74.8568 158.501 75.546C157.841 76.2289 157.511 77.0684 157.511 78.0645C157.511 79.0544 157.841 79.8971 158.501 80.5925C159.167 81.2817 159.963 81.6262 160.887 81.6262C161.817 81.6262 162.612 81.2848 163.272 80.6019ZM157.539 81.4853C156.622 80.558 156.163 79.4209 156.163 78.0739C156.163 76.7207 156.622 75.5804 157.539 74.6532C158.463 73.7197 159.582 73.2529 160.896 73.2529C162.21 73.2529 163.326 73.7197 164.244 74.6532C165.161 75.5804 165.62 76.7207 165.62 78.0739C165.62 79.4209 165.161 80.558 164.244 81.4853C163.326 82.4125 162.21 82.8761 160.896 82.8761C159.582 82.8761 158.463 82.4125 157.539 81.4853Z" fill={_color} />
      <path d="M176.827 81.4383V85H175.478V82.6882H168.039V85H166.69V81.4383H167.36C167.397 81.4007 167.454 81.3381 167.529 81.2503C167.611 81.1564 167.746 80.9496 167.935 80.6301C168.124 80.3106 168.29 79.966 168.435 79.5964C168.586 79.2204 168.718 78.7224 168.831 78.1021C168.95 77.4756 169.01 76.824 169.01 76.1474V73.4503H175.375V81.4383H176.827ZM170.358 74.7002V76.1474C170.358 77.2 170.229 78.1648 169.972 79.0419C169.714 79.919 169.456 80.5392 169.198 80.9026L168.812 81.4383H174.026V74.7002H170.358Z" fill={_color} />
      <path d="M185.799 82.6882V78.6472H180.49V82.6882H179.141V73.4503H180.49V77.3973H185.799V73.4503H187.156V82.6882H185.799Z" fill={_color} />
      <path d="M196.873 80.6019C197.539 79.9127 197.873 79.0701 197.873 78.0739C197.873 77.0715 197.539 76.2289 196.873 75.546C196.213 74.8568 195.418 74.5122 194.488 74.5122C193.563 74.5122 192.768 74.8568 192.102 75.546C191.442 76.2289 191.112 77.0684 191.112 78.0645C191.112 79.0544 191.442 79.8971 192.102 80.5925C192.768 81.2817 193.563 81.6262 194.488 81.6262C195.418 81.6262 196.213 81.2848 196.873 80.6019ZM191.14 81.4853C190.222 80.558 189.763 79.4209 189.763 78.0739C189.763 76.7207 190.222 75.5804 191.14 74.6532C192.064 73.7197 193.183 73.2529 194.497 73.2529C195.811 73.2529 196.927 73.7197 197.844 74.6532C198.762 75.5804 199.221 76.7207 199.221 78.0739C199.221 79.4209 198.762 80.558 197.844 81.4853C196.927 82.4125 195.811 82.8761 194.497 82.8761C193.183 82.8761 192.064 82.4125 191.14 81.4853Z" fill={_color} />
      <path d="M203.959 79.4178H202.799L202.507 69.2119H204.251L203.959 79.4178ZM202.667 82.613C202.498 82.4313 202.413 82.1995 202.413 81.9176C202.413 81.6356 202.498 81.407 202.667 81.2315C202.843 81.0499 203.079 80.959 203.374 80.959C203.676 80.959 203.912 81.0499 204.082 81.2315C204.258 81.407 204.346 81.6356 204.346 81.9176C204.346 82.1995 204.258 82.4313 204.082 82.613C203.912 82.7884 203.676 82.8761 203.374 82.8761C203.079 82.8761 202.843 82.7884 202.667 82.613Z" fill={_color} />
      <path d="M171.214 26.0183C174.441 26.0183 176.862 26.9451 178.476 28.7989C180.089 30.6207 181.122 32.794 181.574 35.3189C182.026 37.8119 182.252 40.6405 182.252 43.8046C182.252 46.3615 181.864 48.9983 181.09 51.715C180.315 54.3997 179.121 56.6689 177.507 58.5227C175.894 60.3764 173.909 61.3033 171.553 61.3033C166.938 61.3033 163.872 59.3856 162.355 55.5503C160.838 51.683 160.079 47.5441 160.079 43.1334C160.079 38.8826 160.66 35.4787 161.822 32.9219C163.016 30.365 164.453 28.5752 166.131 27.5524C167.841 26.5296 169.536 26.0183 171.214 26.0183ZM171.166 49.1261C172.037 49.1261 172.682 48.6467 173.102 47.6879C173.522 46.729 173.731 45.5784 173.731 44.2361C173.731 42.9576 173.522 41.839 173.102 40.8802C172.715 39.9213 172.182 39.4419 171.504 39.4419C170.698 39.4419 170.084 40.0012 169.665 41.1199C169.278 42.2066 169.084 43.3891 169.084 44.6676C169.084 45.978 169.213 47.0487 169.471 47.8796C169.729 48.7106 170.294 49.1261 171.166 49.1261Z" fill={_color} />
      <path d="M196.962 26.3747C200.19 26.3747 202.61 27.3015 204.224 29.1553C205.838 30.9771 206.87 33.1504 207.322 35.6754C207.774 38.1683 208 40.9969 208 44.161C208 46.7179 207.613 49.3547 206.838 52.0714C206.064 54.7561 204.869 57.0254 203.256 58.8791C201.642 60.7328 199.657 61.6597 197.301 61.6597C192.686 61.6597 189.62 59.7421 188.103 55.9067C186.586 52.0394 185.828 47.9005 185.828 43.4898C185.828 39.239 186.409 35.8352 187.571 33.2783C188.765 30.7214 190.201 28.9316 191.879 27.9088C193.59 26.8861 195.284 26.3747 196.962 26.3747ZM196.914 49.4825C197.785 49.4825 198.431 49.0031 198.85 48.0443C199.27 47.0855 199.48 45.9349 199.48 44.5925C199.48 43.3141 199.27 42.1954 198.85 41.2366C198.463 40.2778 197.931 39.7983 197.253 39.7983C196.446 39.7983 195.833 40.3577 195.413 41.4763C195.026 42.563 194.832 43.7455 194.832 45.024C194.832 46.3344 194.961 47.4051 195.22 48.2361C195.478 49.0671 196.043 49.4825 196.914 49.4825Z" fill={_color} />
    </svg>

  )
}

export default LogoIcon