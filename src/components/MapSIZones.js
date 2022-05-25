import PropTypes from "prop-types";
import "./mapzones.css";
// import styled from "styled-components";

const MapSIZones = (props) => {
  const clickHandler = (event) => {
    return props.goTo(event);
  };

  return (
    <svg x={10} y={2.7} cursor={"pointer"}>
      <g
        xmlns="http://www.w3.org/2000/svg"
        id="dots"
        fill="red"
        transform="scale(0.34)"
      >
        <circle id="dot154" cx="140" cy="127" r="1.7555633" />
        <circle id="dot153" cx="156" cy="116" r="1.7555633" />
        <circle id="dot148" cx="167" cy="97" r="1.7555633" />
        <circle id="dot147" cx="190" cy="74" r="1.7555633" />
        <circle id="dot146" cx="215" cy="51" r="1.7555633" />
        <circle id="dot145" cx="218" cy="33" r="1.7555633" />
        <circle id="dot144" cx="213" cy="26" r="1.7555633" />
        <circle id="dot143" cx="199" cy="38" r="1.7555633" />
        <circle id="dot141" cx="185" cy="29" r="1.7555633" />
        <circle id="dot140" cx="180" cy="14" r="1.7555633" />
        <circle id="dot175" cx="165" cy="40" r="1.7555633" />
        <circle id="dot142" cx="177" cy="48" r="1.7555633" />
        <circle id="dot174" cx="149" cy="73" r="1.7555633" />
        <circle id="dot173" cx="98" cy="118" r="1.7555633" />
        <circle id="dot157" cx="108" cy="144" r="1.7555633" />
        <circle id="dot162" cx="82" cy="165" r="1.7555633" />
        <circle id="dot163" cx="59" cy="176" r="1.7555633" />
        <circle id="dot164" cx="41" cy="193" r="1.7555633" />
        <circle id="dot172" cx="15" cy="197" r="1.7555633" />
        <circle id="dot167" cx="35" cy="222" r="1.7555633" />
        <circle id="dot166" cx="52" cy="221" r="1.7555633" />
        <circle id="dot165" cx="76" cy="218" r="1.7555633" />
        <circle id="dot161" cx="96" cy="213" r="1.7555633" />
        <circle id="dot160" cx="114" cy="212" r="1.7555633" />
        <circle id="dot159" cx="102" cy="189" r="1.7555633" />
        <circle id="dot149" cx="173" cy="113" r="1.7555633" />
        <circle id="dot150" cx="176" cy="120" r="1.7555633" />
        <circle id="dot151" cx="181" cy="126" r="1.7555633" />
        <circle id="dot152" cx="182" cy="131" r="1.7555633" />
        <circle id="dot168" cx="66" cy="255" r="1.7555633" />
        <circle id="dot169_170" cx="42" cy="264" r="1.7555633" />
        <circle id="dot171" cx="13" cy="251" r="1.7555633" />
        <circle id="dot176_177" cx="50" cy="69" r="1.7555633" />
        <circle id="dot155" cx="129" cy="154" r="1.7555633" />
        <circle id="dot156" cx="125" cy="169" r="1.7555633" />
        <circle id="dot158" cx="113" cy="175" r="1.7555633" />
      </g>
      <g
        xmlns="http://www.w3.org/2000/svg"
        id="zones"
        strokeWidth={0}
        fillOpacity={0}
        transform="scale(0.34) translate(-490.8403,-11.549397)"
      >
        <path
          id="140"
          onClick={clickHandler}
          d="m 674.94758,11.777589 c -6.15569,10.740932 6.30451,11.814264 10.7373,13.963189 -8.22595,2.465781 -17.32145,21.340476 -22.25565,4.654489 -0.91421,-10.40541 -11.42211,3.012906 -6.9534,-6.711552 5.95826,-3.675042 11.21292,-10.822996 18.47175,-11.906126 z"
        />
        <path
          id="141"
          onClick={clickHandler}
          d="m 2590.9824,103.17969 c -15.633,3.01521 -27.6123,14.28179 -38.1562,25.4082 -29.7733,9.03593 -34.3594,105.21507 8.4277,73.11133 14.3415,-14.11611 3.2879,-37.05484 16.2715,-50.77539 9.2475,-13.54793 1.5403,-33.21498 13.457,-47.74414 z"
          transform="scale(0.26458333)"
        />
        <path
          id="142"
          onClick={clickHandler}
          d="m 2525.9414,184.41797 c -14.2794,0.33615 -45.6582,63.79864 -21.3379,45.77344 -11.7742,10.75009 -5.626,20.29379 3.2051,37.33984 6.7206,47.12234 35.2368,9.44848 47.196,-11.54139 5.426,-9.52785 6.2285,-6.51974 10.824,-11.57157 49.7494,-46.69664 -53.1083,-11.8085 -38.8462,-59.90462 -0.3358,-0.0734 -0.6825,-0.10414 -1.041,-0.0957 z"
          transform="scale(0.26458333)"
        />
        <path
          id="143"
          onClick={clickHandler}
          d="m 2641.6504,141.84766 -7.8731,2.15039 c -14.5791,6.01654 -19.1003,12.99239 -18.6367,18.35547 -23.0175,7.18493 -9.7332,-7.66609 -31.9687,-13.2461 -8.7406,20.2908 -33.089,63.11475 1.1445,70.96289 41.6951,-0.33957 96.2943,-34.24328 57.334,-78.22265 z"
          transform="scale(0.26458333)"
        />
        <path
          id="144"
          onClick={clickHandler}
          d="m 2693.6504,85.847656 c -21.5867,2.908702 -11.8854,17.963514 0,0 z m 0.1308,27.031254 a 25.80487,15.317329 0 0 0 -25.6074,13.47461 c -5.6491,3.7689 -12.3839,4.92598 -20.0918,4.625 -21.5511,31.90488 37.3088,34.92569 45.8672,12.53125 a 25.80487,15.317329 0 0 0 19.1348,-5.16211 c 1.4917,0.96255 3.1966,-0.0363 4.6699,-4.50782 a 25.80487,15.317329 0 0 0 1.832,-5.64257 25.80487,15.317329 0 0 0 -0.164,-1.72266 c 0.3341,-2.10563 0.6348,-4.52408 0.8945,-7.29492 -1.9115,-0.9301 -3.529,-1.33776 -4.8848,-1.33985 -0.7748,-10e-4 -1.4597,0.13731 -2.0703,0.38086 a 25.80487,15.317329 0 0 0 -19.5801,-5.34179 z"
          transform="scale(0.26458333)"
        />
        <path
          id="145"
          onClick={clickHandler}
          d="m 715.16425,38.941471 c -6.25961,3.478774 3.07351,3.451002 8.16788,-0.209814 6.24386,-0.413892 -4.59976,7.041926 -12.78873,9.998262 -6.31707,2.280552 -10.72916,1.499182 -6.51761,-5.252067 3.05133,-2.717561 7.25893,-3.659364 11.13846,-4.536381 z"
        />
        <path
          id="146"
          onClick={clickHandler}
          d="m 714.10592,48.46647 c 9.11958,8.488918 3.46751,25.230661 -5.90326,27.049161 2.66685,-8.954848 -6.49414,0.467262 -5.38563,-4.824164 -4.68949,0.237188 -15.10586,-13.776086 -15.00062,-12.352677 8.27285,-1.432867 17.66345,-8.791708 24.0265,-8.895646 0.3365,-1.005185 1.49212,-0.677749 2.26301,-0.976674 z"
        />
        <path
          id="147"
          onClick={clickHandler}
          d="m 2598.2363,227.10742 c -34.2641,0.8202 -47.8235,54.3922 -76.5859,72.96289 -18.3999,16.52679 -106.0806,45.88816 -65.1699,64.39649 38.3458,11.05617 70.3272,43.01914 111.8359,32.04687 41.9898,28.32998 50.065,-25.31945 64.666,-52 24.3649,-11.00697 -0.9494,-27.45966 14.6172,-24.61719 8.8302,13.14807 44.7829,-29.92638 27.3828,-50.04882 -18.3539,7.93555 -14.8583,18.78721 -29.4222,0.41216 -15.9651,-8.88738 -29.3751,-32.08779 -42.1129,-42.87896 -1.7896,-0.22528 -3.5259,-0.31378 -5.211,-0.27344 z"
          transform="scale(0.26458333)"
        />
        <path
          id="148"
          onClick={clickHandler}
          d="m 2438.2715,364.46289 c -46.1212,43.08486 16.4405,72.63822 31.3789,114.7168 2.2684,-17.22391 22.8479,-24.38177 41.2356,-29.85611 19.1141,0.38577 1.4932,2.08161 29.8356,5.3502 6.6299,-3.79718 9.4231,-14.12209 17.6374,-19.84064 13.5738,-9.44973 33.1696,-15.77784 44.6234,-28.98548 -18.6106,7.37272 -32.4523,-13.58295 -52,-1.55664 -41.7947,-2.28091 -70.0319,-38.54259 -112.7109,-39.82813 z m -9.5117,2.27344 c 0.1485,0.29601 0.1485,0.29601 0,0 z m 116.8906,96.44336 c -0.4444,0.44443 -0.4444,0.44443 0,0 z"
          transform="scale(0.26458333)"
        />
        <path
          id="149"
          onClick={clickHandler}
          d="m 672.30175,121.13867 c 1.63496,13.31288 -29.21489,5.31472 -10.2616,-0.47458 3.43382,-0.36233 6.84037,0.33159 10.2616,0.47458 z"
        />
        <path
          id="150"
          onClick={clickHandler}
          d="M 681.83789 441.5293 C 664.22799 442.33464 646.04101 444.88444 655.12891 463.82422 C 664.77861 487.34142 681.95769 451.91336 681.83789 441.5293 z M 696.03906 452.83594 C 688.78306 452.98531 689.60319 457.65903 689.68359 458.14453 C 690.17589 461.11312 730.39326 465.45607 733.97656 465.52539 C 754.95156 467.42101 767.51292 469.40874 773.44922 468.93555 C 781.89652 468.2623 778.42904 463.92757 774.58594 462.91016 C 758.45344 458.63956 719.34044 454.89792 698.46484 452.93555 C 698.15714 452.90535 697.86122 452.88574 697.57422 452.86914 C 697.29602 452.85404 697.02688 452.84354 696.76758 452.83594 C 696.51638 452.83094 696.27316 452.83094 696.03906 452.83594 z "
          transform="matrix(0.26458333,0,0,0.26458333,490.8403,11.549397)"
        />
        <path
          id="151"
          onClick={clickHandler}
          d="m 2543.9863,508.46289 c -25.7381,-0.0918 -26.6876,15.36197 -14.7617,14.7207 l 11.884,1.11205 c 1.0086,-0.59407 2.2513,-1.28264 3.7598,-2.08008 14.3105,-0.69277 21.546,-5.7667 18.1043,-8.00267 -3.9712,-2.57994 -19.3192,-3.58178 -15.9903,-5.69922 -1.0475,-0.0302 -2.0447,-0.0474 -2.9961,-0.0508 z"
          transform="scale(0.26458333)"
        />
        <path
          id="152"
          onClick={clickHandler}
          d="m 679.23249,137.65545 c -3.12363,-0.007 -7.5437,1.93688 -7.74803,1.5267 l -4.18358,-0.4888 c -0.78879,4.9939 2.99654,5.82863 5.43573,8.17039 2.34415,2.25052 7.6359,0.79157 9.05558,-1.25025 3.47545,-5.64714 1.18252,-7.94914 -2.5597,-7.95804 z"
        />
        <path
          id="153"
          onClick={clickHandler}
          d="m 638.96425,106.67479 c 6.24165,9.9555 13.6997,21.4952 22.90623,23.42616 0.54263,4.52525 9.00771,14.12674 0.65321,10.87442 -2.71654,9.69818 -6.81546,2.34874 -6.21368,0.36675 -2.37812,-0.1383 -3.56466,-2.22515 -8.52631,-6.09234 -4.91015,-3.83899 -8.33473,-5.51321 -11.21803,-9.33423 -4.26085,-4.23285 -3.29131,-10.80527 -11.35975,-10.7741 2.0279,-5.5666 8.77603,-6.88825 13.75833,-8.46666 z"
        />
        <path
          id="154"
          onClick={clickHandler}
          d="m 2358.0254,441.71875 c -8.5379,-0.0524 -17.1923,4.77275 -25.7871,17.13086 -47.5292,5.46788 -25.6344,39.57194 -19.4785,72.77539 -4.8528,17.8978 -3.6333,34.69894 -4.8694,42.89904 16.367,13.363 41.7113,21.16974 58.9465,29.84829 23.1563,4.73175 14.9407,2.67428 39.5361,-20.72975 29.4346,-0.33207 51.5028,-33.25791 77.2931,-28.69013 -8.5859,-28.59689 -47.4468,-33.03406 -61.2911,-57.06573 -18.0385,-18.59579 -40.7449,-56.02299 -64.3496,-56.16797 z"
          transform="scale(0.26458333)"
        />
        <path
          id="155"
          onClick={clickHandler}
          d="m 2316.8086,588.08398 c -38.9426,0.6891 11.2819,102.11496 45.2363,69.5625 4.6862,-16.50032 2.0422,-26.66796 12.9375,-43.79882 -19.2008,-3.86555 -34.0781,-17.64091 -51.7676,-25.10547 -2.359,-0.48133 -4.491,-0.6921 -6.4062,-0.65821 z m 58.7031,43.76563 c -0.1646,0.0141 -0.3005,0.14175 -0.3203,0.3125 l -0.8164,7.04883 c -0.023,0.19513 0.1154,0.36998 0.3105,0.39258 l 47.7598,5.53125 c 0.1951,0.0226 0.3719,-0.11737 0.3945,-0.3125 l 0.8164,-7.04883 c 0.023,-0.19514 -0.1173,-0.37194 -0.3124,-0.39453 l -47.7598,-5.5293 c -0.024,-0.003 -0.049,-0.002 -0.072,0 z"
          transform="scale(0.26458333)"
        />
        <path
          id="156"
          onClick={clickHandler}
          d="m 2313.6504,645.84766 c -3.1094,7.6936 -4.6455,15.84175 -11.3711,21.39062 -33.9575,26.46909 32.871,39.93273 51.3711,46.60938 29.2273,-42.47241 -13.2947,-47.39512 -40,-68 z"
          transform="scale(0.26458333)"
        />
        <path
          id="157"
          onClick={clickHandler}
          d="m 607.56703,126.43034 c 6.92968,12.52785 -0.77534,25.91284 2.36013,38.54693 3.49127,9.27308 -5.35118,20.67705 -12.13682,9.15143 -2.56266,-6.53425 1.66453,-6.80767 -4.6872,-3.83645 -14.00017,10.88402 -22.01972,-16.5827 -10.93611,-20.69606 9.31011,-6.72154 9.34715,-6.09269 14.75928,-14.62452 2.69797,-3.704 6.34373,-6.85803 10.64072,-8.54133 z"
        />
        <path
          id="158"
          onClick={clickHandler}
          d="m 2252.3164,645.84766 c -4.3023,0.88577 -8.6039,1.77048 -12.9062,2.65625 -36.4621,2.65731 -29.9524,10.55562 -7.3985,36.49414 29.7033,35.356 66.349,66.82495 93.6387,103.51562 -4.2355,-24.90622 15.2897,-51.83301 25.5312,-68.09961 -26.3113,-11.03573 -87.2595,-36.36759 -98.8652,-74.5664 z m 99.3848,92.70703 c -4.3452,0.0245 -9.7024,4.08818 -5.5148,7.9587 1.2239,1.13125 6.0567,0.51648 8.4057,2.11488 6.1216,5.16733 26.6362,8.49728 36.2373,5.87671 5.3102,-1.44937 6.8559,-9.02069 2.3171,-9.98545 -0.9045,-0.19238 -2.08,-0.35601 -3.5606,-0.48047 0.023,-0.0635 0.043,-0.12677 0.064,-0.1914 -0.057,0.062 -0.1108,0.12236 -0.166,0.18359 -2.0646,-0.16932 -4.7196,-0.26531 -8.0254,-0.26758 0.072,-0.39099 0.137,-0.80723 0.1914,-1.25 -0.2888,0.44304 -0.5474,0.85972 -0.7774,1.25195 -0.7523,0.002 -1.5363,0.008 -2.3554,0.0195 -1.9676,-0.78369 -16.4106,-4.65315 -24.9434,-5.16993 -0.5003,-0.0302 -0.9894,-0.0525 -1.4453,-0.0586 -0.1452,-0.002 -0.2876,-0.003 -0.4277,-0.002 z"
          transform="scale(0.26458333)"
        />
        <path
          id="159"
          onClick={clickHandler}
          d="m 2224.3164,679.17969 c -28.2311,9.55188 -35.6854,44.74479 -64,56 10.5291,15.25863 6.4525,31.59107 1.334,48 18.167,8.85993 32.7542,27.95594 53.7109,28.83789 44.3679,12.16661 31.5757,-14.70622 35.6211,33.83008 16.1742,-31.1393 65.2122,-16.55217 70.2617,-51.66602 -22.9632,-46.44646 -68.7512,-72.6294 -96.9277,-115.00195 z"
          transform="scale(0.26458333)"
        />
        <path
          id="160"
          onClick={clickHandler}
          d="m 2304.3164,820.51367 c -7.6928,-0.0858 -15.452,1.84903 -22.0469,5.84766 -21.0094,9.82057 -40.6809,33.80301 -26.2871,56.18945 6.727,0.35286 32.6617,-25.5167 51.7832,-24.85547 1.1328,-10.26708 -3.7497,-13.83482 -3.4492,-37.18164 z m 18.666,24 c -7.259,16.90606 19.5828,7.37347 29.6094,14.75977 22.3019,5.7219 31.5095,-5.44859 6.502,-9.89063 -12.8182,0.94485 -23.9213,-0.77243 -36.1114,-4.86914 z"
          transform="scale(0.26458333)"
        />
        <path
          id="161"
          onClick={clickHandler}
          d="m 2160.3164,788.51367 c 1.4847,5.05491 2.7516,10.21924 4.1055,15.33985 -0.9648,1.71422 -0.2552,4.18548 1.4648,5.3496 3.3838,11.78474 7.8467,23.02658 17.3184,31.75391 -4.21,16.36426 -1.4578,30.72576 3.3086,44.80469 7.109,14.40136 23.2141,25.59228 33.8027,38.75195 l 4.7109,-1.79883 5.6075,-2.88867 c 43.8511,-20.25921 9.0755,-62.02404 16.2695,-96.87109 -23.9853,-6.44727 -63.3492,-12.70077 -86.5879,-34.44141 z m 96,122.66602 c 0.4444,0.44443 0.4444,0.44443 0,0 z"
          transform="scale(0.26458333)"
        />
        <path
          id="162"
          onClick={clickHandler}
          d="m 2180.3164,573.84766 c -34.7165,15.58609 -98.5955,43.467 -96.1269,82.14453 18.6714,17.01441 32.9626,69.19703 48.4726,68.78711 9.8692,7.44681 16.7629,-2.2166 20.2617,-10.1211 -0.5305,2.049 -1.1336,4.4917 -1.8281,7.47071 7.7815,33.6729 49.947,-40.91362 70.5547,-45.61524 -29.4919,-26.65345 -50.6398,-58.57193 -41.334,-102.66601 z m 33.334,94.66601 c 0.4444,0.44444 0.4444,0.44444 0,0 z"
          transform="scale(0.26458333)"
        />
        <path
          id="163"
          onClick={clickHandler}
          d="m 2076.3164,643.17969 c -11.4257,3.28853 -24.8385,5.9636 -30.9258,17.61914 -31.3652,42.30588 -23.2362,140.28672 45.5918,127.71484 25.9423,-7.66227 82.5092,1.66078 71.6758,-38.19336 -4.7411,-13.37525 -13.2506,-31.59265 -26.5165,-17.45053 -40.6113,-24.5813 -22.1378,-22.98659 -59.8253,-89.69009 z"
          transform="scale(0.26458333)"
        />
        <path
          id="164"
          onClick={clickHandler}
          d="m 2005.627,699.59961 c -7.6161,0.17667 -16.4346,4.3306 -25.25,13.71094 -35.4315,35.95808 -58.7851,92.63438 -41.4825,141.28125 1.8821,44.09324 36.9756,18.163 37.3965,-10.0586 7.631,-1.2502 20.9392,0.9604 24.7969,-7.35937 35.4104,-28.35825 59.3207,-58.64772 25.8945,-99.32617 4.7978,-22.29115 -5.7606,-38.6098 -21.3554,-38.24805 z"
          transform="scale(0.26458333)"
        />
        <path
          id="165"
          onClick={clickHandler}
          d="m 2157.6504,781.84766 c -11.5196,-0.0543 -22.9236,1.91176 -34.127,4.42382 -51.213,-8.00893 -44.9138,44.31961 -48.0957,79.57618 23.9528,24.86033 33.5715,49.62817 12.1524,80.57226 -7.6948,24.32176 5.6618,26.92658 18.1699,20.06641 4.3269,27.35296 33.9675,7.93397 45.2324,14.02734 22.7293,-6.66349 41.2551,-7.50507 58.8321,-27.49609 29.8078,-31.19154 -26.2577,-42.83193 -25.9375,-71.12891 -0.9238,-34.94071 -23.6518,-62.96699 -26.2266,-100.04101 z"
          transform="scale(0.26458333)"
        />
        <path
          id="166"
          onClick={clickHandler}
          d="m 2051.6387,787.72461 c -3.2848,0.0206 -6.3235,1.78938 -9.0332,6.98437 -45.2636,29.27917 -14.1087,75.24555 -31.9024,118.94532 -3.1016,16.49104 1.4372,22.92469 7.375,23.30273 0.752,3.97198 21.2326,-1.77451 26.1485,-2.32617 6.8969,13.12847 31.6038,13.52505 11.3183,31.87695 29.6916,25.8556 28.7165,-38.3398 44.1055,-57.99414 -34.5449,-30.78444 -25.3597,-73.43617 -19.334,-114.66601 -10.2749,5.19358 -20.2832,-6.17573 -28.6777,-6.12305 z"
          transform="scale(0.26458333)"
        />
        <path
          id="167"
          onClick={clickHandler}
          d="m 531.71983,220.622 c 2.39606,4.23591 2.06045,8.65054 0.60485,13.13845 -1.61333,4.91336 -1.17123,10.00868 -0.95763,15.08377 -8.02015,3.39033 -2.66402,-17.91266 -6.35,-7.40833 -5.78668,-0.31607 -13.75082,-0.0655 -7.94406,-7.67194 4.31863,-2.43582 5.85732,-9.16211 7.23851,-1.85307 -4.20333,-11.41816 2.49137,-5.97482 7.40833,-11.28888 z"
        />
        <ellipse
          id="168"
          onClick={clickHandler}
          cx="589"
          cy="178"
          rx="7.8484006"
          ry="5.2150559"
          transform="rotate(8.5938218)"
        />
        <path
          id="169_170"
          onClick={clickHandler}
          d="m 528.19205,271.42199 c -3.31604,5.31483 -8.01842,11.72389 -9.41138,15.06701 7.56354,4.23537 6.51814,-4.19774 12.34506,-3.12833 7.1358,-0.93441 16.08956,-5.07056 9.06076,-13.34979 -1.61711,-4.12071 -10.71967,-13.32966 -13.7541,-4.27099 -0.0813,2.01838 0.54365,4.05245 1.75966,5.6821 z"
        />
        <path
          id="171"
          onClick={clickHandler}
          d="m 497.75348,270.10457 c -0.42441,6.38969 15.39867,10.71215 16.26865,-0.44647 3.41745,-14.28531 -15.57363,-24.88485 -20.44003,-7.65538 1.77694,4.61933 1.11252,5.35301 4.17138,8.10185 z"
        />
        <path
          id="172"
          onClick={clickHandler}
          d="m 2019.8359,624.85156 c -17.8913,-0.61744 -37.7994,27.3107 -24.8535,48.9961 -17.1043,-20.37559 -12.7989,18.3593 -24,5.33203 7.9068,17.39399 -11.4797,10.51371 -8,29.33398 -8.7555,-18.16872 -14.7199,2.89782 -17.332,14.66602 -2.1962,-17.69338 -28.6495,5.43966 -17.3125,14.5664 -23.364,-8.2737 11.5726,25.70888 -16.0215,4.10157 16.6715,29.71899 -4.6041,-3.00924 -9.623,22.43359 -10.5545,0.0438 -6.1898,15.19309 16.1054,9.58594 4.2094,-9.96945 21.27,23.58182 2.9532,10.48047 -36.3478,-20.7077 19.5356,38.4614 -10.2266,13.48046 1.1617,-8.04876 -32.2078,-26.87217 -18.9746,-0.87109 -4.0437,0.18894 -28.0063,25.06029 -4.5742,23.54688 32.5034,-19.18371 6.8318,3.64782 -10.3262,12.00976 24.8774,-3.81721 14.5648,-2.4981 1.332,14.66602 25.9814,-2.96005 8.1928,7.12544 -7.0605,7.48828 -24.0437,1.34921 -18.4393,45.63803 -1.0625,20.79883 17.3371,-19.20639 -14.657,49.05133 16.9375,11.75586 29.1316,-16.39703 -8.9274,15.81747 -16.8145,23.95703 23.536,3.3428 47.3285,5.12031 70.5508,10.37695 18.5456,-14.08913 -10.9091,-69.53617 -14.5508,-98.37695 9.3292,-45.64933 22.0427,-101.6241 71.2071,-123.43946 34.8159,9.64041 33.98,-22.40476 47.4609,-44.56054 l -5.9414,-8.52539 c -4.0243,-15.34271 -11.7407,-21.52208 -19.8731,-21.80274 z"
          transform="scale(0.26458333)"
        />
        <path
          id="173"
          onClick={clickHandler}
          d="m 635.78925,107.02759 c -11.24834,3.2593 -16.69957,16.00115 -28.97529,18.14036 -6.43804,4.51222 -13.19914,12.45114 -15.94026,14.34411 -4.75382,0.31196 -4.84692,9.8958 -14.78446,11.3448 -14.03565,3.93247 -21.79516,18.58582 -34.93578,21.56086 -2.01774,-3.49113 -6.74996,-7.12709 -7.16651,-10.53278 4.58217,-4.55714 8.30777,-10.3616 15.01897,-11.81848 11.1408,3.0869 18.68004,-12.3969 29.38586,-15.26071 7.20743,-8.58176 18.57845,-14.92255 24.71905,-22.40403 10.86255,-0.75964 15.15827,-15.767636 23.22758,-16.821551 2.69026,4.225629 6.82143,7.201931 9.45084,11.447391"
        />
        <path
          id="174"
          onClick={clickHandler}
          d="m 2445.5312,253.68945 c -9.6648,-0.13165 -19.2687,3.35485 -28.3886,13.96485 -5.7151,15.47319 -46.8304,49.88252 -41.9336,61.88281 -3.5005,5.14931 -7.1322,11.80683 -10.8926,20.31055 3.0166,13.56177 30.0097,41.62106 44.3848,51.52539 18.1252,-9.65151 25.1927,-34.79987 25.9062,-51.85547 10.7799,-2.68254 20.5126,-8.72121 27.1426,-20.62696 31.5199,-14.67327 77.2296,-35.77699 33.2324,-69.71093 l -8,7.33398 c -13.0685,-4.70973 -27.3254,-12.63179 -41.4512,-12.82422 z"
          transform="scale(0.26458333)"
        />
        <path
          id="175"
          onClick={clickHandler}
          d="m 2485.873,103.625 c -18.1556,35.14315 -8.1821,91.9945 -52.3886,119.03516 -10.8397,3.6075 -13.9011,6.59865 -12.6524,8.96484 -4.3526,1.63035 -7.1816,0.92631 -7.1816,-4.44531 -21.8007,-3.54353 -12.5312,38.07463 -26.1524,51.23047 -13.0311,54.52063 16.3514,-10.86278 37.6036,-19.29493 23.6766,-30.56248 45.7214,12.46529 64.8691,-0.42578 3.3385,-11.4559 3.4036,-21.10996 1.0508,-28.66601 0.1696,-7.56226 3.188,-14.85178 7.7109,-20.82227 48.2365,-26.65767 24.2693,-92.85914 -12.8594,-105.57617 z"
          transform="scale(0.26458333)"
        />
        <path
          id="176_177"
          onClick={clickHandler}
          d="m 1997.8945,207.49414 c -0.8121,-0.002 -1.6042,0.0148 -2.3769,0.0488 h -15.7774 c -0.1964,0 -0.3554,0.15903 -0.3554,0.35547 v 16.40039 c 0,0.19644 0.159,0.35547 0.3554,0.35547 h 3.9414 c 3.8217,2.546 8.6106,2.40954 11.5899,0 h 5.5449 c 2.6036,1.80153 6.5031,1.25486 10.5313,0 h 21.0722 c 1.0385,0.12418 1.9786,0.11271 2.834,0 h 31.3516 c 4.7728,1.27743 10.7448,0.99951 15.8867,0 h 35.6367 c 0.1964,0 0.3535,-0.15903 0.3535,-0.35547 v -16.40039 c 0,-0.19644 -0.1571,-0.35547 -0.3535,-0.35547 h -117.918 c -0.7861,-0.029 -1.5606,-0.0474 -2.3164,-0.0488 z m 47.961,46.5625 c -19.2039,0.0859 -36.2824,4.36817 -54.3184,13.125 -19.4777,28.62297 25.0659,16.49623 35.3809,8.05078 0.068,0.0668 0.1344,0.13482 0.2011,0.20313 14.4545,26.32892 -28.227,42.00897 6.6211,60.36133 25.3157,-8.84312 42.7141,-20.70814 31.5508,-36.56446 -3.5551,-18.69036 31.1314,-46.55389 8.3594,-42.71875 -9.8976,-1.66838 -19.0659,-2.49609 -27.7949,-2.45703 z m 73.1269,35.79102 c 0.4445,0.44444 0.4445,0.44444 0,0 z m -28,46.66601 c -19.0007,11.09779 11.5741,34.75392 3.7305,2.10156 z"
          transform="scale(0.26458333)"
        />
        <path
          d="m 514.08094,289.76643 c 0.11759,0.11759 0.11759,0.11759 0,0 z"
          id="path3257-2"
        />
        <path
          d="m 2048.3164,648.51367 c 0.4444,0.44444 0.4444,0.44444 0,0 z"
          transform="scale(0.26458333)"
          id="path21596"
        />
        <path
          d="m 674.00673,137.95452 c 0.0393,0.0783 0.0393,0.0783 0,0 z"
          id="path2939-1"
        />
        <path
          d="m 502.43925,133.13311 c 0.11759,0.11759 0.11759,0.11759 0,0 z"
          id="path2923-7"
        />
        <path
          id="intro3"
          d="m 2270.793,82.970703 c -0.6572,-0.0048 -1.4736,0.05848 -2.4766,0.208985 h -38.666 -55.6465 c -0.076,0 -0.1416,0.02996 -0.1992,0.07031 -0.052,-0.02326 -0.1019,-0.04776 -0.1543,-0.07031 -1.5395,10.332675 -1.1036,15.28721 0,16.947262 v 7.70508 c 0,0.19644 0.1571,0.35547 0.3535,0.35547 h 220.1133 c 0.1964,0 0.3535,-0.15903 0.3535,-0.35547 V 83.535156 c 0,-0.196441 -0.1571,-0.355468 -0.3535,-0.355468 h -61.8008 -59.9785 c -0.365,-0.127476 -0.8707,-0.204095 -1.5449,-0.208985 z"
          transform="scale(0.26458333) translate(0,-8)"
        />
        <path
          d="m 659.42536,69.633138 c 0.11759,0.117592 0.11759,0.117592 0,0 z"
          id="path2803-8"
        />
      </g>
    </svg>
  );
};

MapSIZones.propTypes = {
  goTo: PropTypes.func.isRequired,
};

export default MapSIZones;
