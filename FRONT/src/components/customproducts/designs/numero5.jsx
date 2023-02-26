const Numero5 = ({fill, height = 1500, width = 1200}) => {
    return (
       <svg
        viewBox={`0 0 ${height} ${width}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="svg-responsive"
  >
     <path
      d="M1163.12 329.446h-13.84l-.56-155.631-7.2-9.415h21.6v165.046Z"
      fill={fill}
    />
    <path
      d="m1131 150 8.31 11.631h24.92v167.815h14.4V150H1131ZM1189.71 306.738V150h51.51l-4.99 11.631H1203v145.661l8.86 10.523h24.37l8.86-11.077v-134.03h13.29v134.03L1241.77 330h-35.45l-16.61-23.262Z"
      fill={fill}
    />
    <path
      d="m1245.09 172.708-8.86-11.077 4.99-11.631 17.16 22.708h-13.29ZM1228.48 177.138l6.64-13.292-29.9.604v141.181l7.75 9.969h22.15l7.76-9.969v-6.646h-14.4v3.323h-8.86v-125.17h8.86Z"
      fill={fill}
    />
    <path
      d="m1242.88 173.815-7.76-9.969-6.64 13.292v121.847h14.4v-125.17ZM370.062 229.723h-6.923l-.277-77.815-3.6-4.708h10.8v82.523Z"
      fill={fill}
    />
    <path
      d="m354 140 4.154 5.815h12.461v83.908h7.2V140H354ZM383.354 218.369V140h25.754l-2.492 5.815H390v72.831l4.431 5.262h12.185l4.43-5.539v-67.015h6.646v67.015L409.385 230h-17.723l-8.308-11.631Z"
      fill={fill}
    />
    <path
      d="m411.046 151.354-4.431-5.539 2.493-5.815 8.584 11.354h-6.646ZM402.739 153.569l3.323-6.646-14.954.302v70.59l3.877 4.985h11.077l3.877-4.985v-3.323h-7.2v1.662h-4.431v-62.585h4.431Z"
      fill={fill}
    />
    <path
      d="m409.938 151.907-3.877-4.984-3.323 6.646v60.923h7.2v-62.585ZM1115.83 140.1c-1.7 0-2.55-.483-2.55-1.45v-32.3c0-.967.85-1.45 2.55-1.45h1.3c.6 0 1.09.083 1.45.25.37.167.67.5.9 1l9.9 18.4c.4.733.92 1.95 1.55 3.65l.25-.1c-.26-1.333-.4-2.583-.4-3.75v-18c0-.967.85-1.45 2.55-1.45h1c1.7 0 2.55.483 2.55 1.45v32.3c0 .967-.85 1.45-2.55 1.45h-1c-.6 0-1.1-.083-1.5-.25-.4-.167-.7-.483-.9-.95l-10.35-19.1c-.33-.6-.78-1.65-1.35-3.15l-.25.1c.27 1.233.4 2.367.4 3.4v18.5c0 .967-.85 1.45-2.55 1.45h-1Zm36.99.25c-8.6 0-12.9-5.967-12.9-17.9 0-11.867 4.3-17.8 12.9-17.8 8.57 0 12.85 5.933 12.85 17.8 0 11.933-4.28 17.9-12.85 17.9Zm.05-5.6c2.04 0 3.55-.933 4.55-2.8 1-1.9 1.5-5.067 1.5-9.5s-.5-7.567-1.5-9.4c-.96-1.867-2.48-2.8-4.55-2.8-2.1 0-3.65.933-4.65 2.8-1 1.833-1.5 4.967-1.5 9.4 0 4.433.5 7.6 1.5 9.5 1 1.867 2.55 2.8 4.65 2.8Zm29.54-6.2c-.44 0-.79-.067-1.05-.2-.27-.167-.49-.433-.65-.8l-4.45-8.5c-.2-.367-.42-.833-.65-1.4-.24-.567-.42-1-.55-1.3l-.2.05c.2 1.333.3 2.35.3 3.05v19.2c0 .5-.2.867-.6 1.1-.4.233-1.05.35-1.95.35h-1.35c-.9 0-1.55-.117-1.95-.35-.4-.233-.6-.6-.6-1.1v-32.3c0-.5.2-.867.6-1.1.4-.233 1.05-.35 1.95-.35h1.4c.7 0 1.25.1 1.65.3.4.2.71.517.95.95l6.85 13.1c.23.467.53 1.267.9 2.4a8.75 8.75 0 0 1 .85-2.4l6.8-13.1c.23-.433.55-.75.95-.95.43-.2 1-.3 1.7-.3h1.35c.9 0 1.55.117 1.95.35.4.233.6.6.6 1.1v32.3c0 .5-.2.867-.6 1.1-.4.233-1.05.35-1.95.35h-1.3c-.9 0-1.55-.117-1.95-.35-.4-.233-.6-.6-.6-1.1v-19.2c0-.7.1-1.717.3-3.05l-.2-.05c-.44 1.133-.85 2.033-1.25 2.7l-4.4 8.5c-.2.367-.44.633-.7.8-.24.133-.57.2-1 .2h-1.15Zm20.72 11.45c-.6 0-1.03-.133-1.3-.4-.27-.3-.4-.783-.4-1.45V106.8c0-.633.13-1.083.4-1.35.27-.3.7-.45 1.3-.45h8.85c3.43 0 5.98.75 7.65 2.25s2.5 3.617 2.5 6.35c0 1.867-.42 3.5-1.25 4.9-.83 1.4-1.92 2.433-3.25 3.1v.2c1.53.467 2.83 1.4 3.9 2.8 1.1 1.367 1.65 3.2 1.65 5.5 0 3.133-.93 5.567-2.8 7.3-1.87 1.733-4.63 2.6-8.3 2.6h-8.95Zm8.75-20.45c1.23 0 2.18-.417 2.85-1.25.67-.833 1-2.017 1-3.55 0-1.6-.32-2.75-.95-3.45-.6-.7-1.55-1.05-2.85-1.05h-4.1v9.3h4.05Zm.7 15.2c2.73 0 4.1-1.733 4.1-5.2 0-1.633-.37-2.833-1.1-3.6-.7-.8-1.78-1.2-3.25-1.2h-4.5v10h4.75Zm16.3 5.35c-1.73 0-2.6-.483-2.6-1.45v-31.8c0-.633.13-1.1.4-1.4.3-.3.75-.45 1.35-.45h8.05c6.7 0 10.05 3.167 10.05 9.5 0 3.967-1.57 6.783-4.7 8.45v.2c1.33.733 2.47 2.55 3.4 5.45l3 9.65c.03.1.07.217.1.35.03.1.05.2.05.3 0 .767-.9 1.15-2.7 1.15h-1.45c-1.57 0-2.43-.383-2.6-1.15l-2.75-9.6c-.4-1.133-.87-1.917-1.4-2.35-.5-.433-1.28-.65-2.35-.65h-1.85v12.35c0 .967-.88 1.45-2.65 1.45h-1.35Zm7.55-19.9c.9 0 1.67-.45 2.3-1.35.63-.9.95-2.1.95-3.6 0-1.6-.32-2.767-.95-3.5-.6-.767-1.43-1.15-2.5-1.15h-3.4v9.6h3.6Zm15.34 19.8c-.6 0-1.04-.133-1.3-.4-.27-.3-.4-.783-.4-1.45v-31.3c0-.667.13-1.133.4-1.4.26-.3.7-.45 1.3-.45h14.6c.46 0 .8.183 1 .55.2.333.3.867.3 1.6v1.3c0 .733-.1 1.283-.3 1.65-.2.333-.54.5-1 .5h-9.65v8.7h8.6c.46 0 .8.183 1 .55.2.333.3.867.3 1.6v1.3c0 .733-.1 1.283-.3 1.65-.2.333-.54.5-1 .5h-8.6v9.5h9.7c.43 0 .75.167.95.5.2.333.3.883.3 1.65v1.3c0 .767-.1 1.317-.3 1.65-.2.333-.52.5-.95.5h-14.65Z"
      fill={fill}
    />
    <g clipPath="url(#a)" fill={fill}>
      <path d="M483.986 225.855c12.63 0 22.869-10.238 22.869-22.868 0-12.63-10.239-22.869-22.869-22.869-12.63 0-22.868 10.239-22.868 22.869 0 12.63 10.238 22.868 22.868 22.868Zm0-44.563c11.963 0 21.695 9.732 21.695 21.695 0 11.962-9.732 21.694-21.695 21.694-11.962 0-21.695-9.732-21.695-21.694 0-11.963 9.733-21.695 21.695-21.695Z" />
      <path d="M483.986 223.976c11.593 0 20.99-9.397 20.99-20.99 0-11.592-9.397-20.989-20.99-20.989-11.592 0-20.989 9.397-20.989 20.989 0 11.593 9.397 20.99 20.989 20.99Zm0-41.51c11.315 0 20.521 9.205 20.521 20.52s-9.206 20.52-20.521 20.52c-11.315 0-20.52-9.205-20.52-20.52s9.205-20.52 20.52-20.52Z" />
      <path d="M483.986 226.973c13.226 0 23.986-10.76 23.986-23.987 0-13.226-10.76-23.986-23.986-23.986S460 189.76 460 202.986c0 13.227 10.76 23.987 23.986 23.987Zm0-47.503c12.967 0 23.517 10.549 23.517 23.516 0 12.968-10.55 23.517-23.517 23.517-12.967 0-23.516-10.55-23.516-23.517 0-12.967 10.549-23.516 23.516-23.516Z" />
      <path d="M497.424 198.963c-.008.03-.021.059-.023.089-.032.399-.237.688-.571.893a2.007 2.007 0 0 1-.694.257c-1.031.192-2.062.215-3.086-.045-.218-.056-.429-.14-.64-.219-.139-.052-.202-.169-.212-.31-.011-.163-.01-.328-.013-.492l-.044-2.5a.414.414 0 0 0-.025-.15c-.018.028-.038.055-.052.085a2.458 2.458 0 0 0-.226.856c-.021.234-.03.47-.029.704l.051 13.038c.008 2.036.011 4.072.02 6.108a.507.507 0 0 1-.209.444 5.3 5.3 0 0 1-1.053.617c-.702.318-1.437.531-2.188.692-.816.175-1.641.283-2.473.351a28.873 28.873 0 0 1-3.443.068 18.776 18.776 0 0 1-3.036-.341c-.748-.153-1.48-.359-2.173-.687a4.288 4.288 0 0 1-.968-.603c-.098-.083-.185-.178-.275-.27a.394.394 0 0 1-.112-.303c.002-.039.001-.079.001-.119V198.14c0-.422-.014-.842-.112-1.255-.033-.142-.084-.279-.129-.418a.257.257 0 0 0-.076-.114c-.003.036-.008.073-.008.109l-.052 3.02-.002.106a.551.551 0 0 1-.268.477 1.337 1.337 0 0 1-.429.174c-.29.069-.586.106-.883.106-.514-.001-1.029.001-1.542-.03a3.809 3.809 0 0 1-1.527-.423 2.418 2.418 0 0 1-.343-.226.647.647 0 0 1-.226-.306c-.01-.028-.032-.052-.049-.077v-.213c.016-.091.039-.181.048-.272.085-.887.157-1.775.254-2.661.103-.943.24-1.881.42-2.813.117-.605.255-1.204.447-1.791a3.447 3.447 0 0 1 .949-1.469 5.56 5.56 0 0 1 .809-.625c.729-.467 1.518-.802 2.34-1.065.143-.046.291-.082.429-.14.568-.236 1.133-.479 1.7-.72l2.298-.978c.045-.019.093-.035.132-.063.135-.098.282-.1.431-.054.118.036.235.079.349.129a6.9 6.9 0 0 0 2.482.584c.853.039 1.693-.038 2.509-.295.492-.155.975-.342 1.462-.515h.133c.102.039.218.061.28.163a.338.338 0 0 0 .176.131c.849.356 1.7.709 2.547 1.07.713.305 1.416.631 2.148.889.171.061.339.129.507.198.567.233 1.121.489 1.636.825a3.748 3.748 0 0 1 1.598 2.119c.238.791.403 1.598.526 2.413.104.683.198 1.369.273 2.056.084.775.142 1.553.213 2.33.003.034.015.067.023.101v.346Zm-21.344-2.751c.074.179.139.365.185.553.113.45.133.911.133 1.373l-.001 18.922c0 .039.003.08 0 .119a.157.157 0 0 0 .056.142c.082.073.161.152.248.221.312.246.661.428 1.026.582.847.358 1.737.554 2.642.688a21.51 21.51 0 0 0 2.823.212c1.217.019 2.43-.029 3.638-.178a15.75 15.75 0 0 0 2.166-.409c.605-.162 1.197-.361 1.751-.658.214-.115.413-.256.62-.386.049-.03.075-.071.068-.132-.005-.035-.001-.071-.001-.106l-.063-15.382c-.005-1.265-.008-2.528-.01-3.793 0-.378.032-.753.129-1.12.082-.311.205-.604.405-.859.008-.01.666-.702.681.096.014.74.025 1.481.038 2.221.006.377.016.754.02 1.131 0 .078.02.124.099.146.119.034.235.08.354.113.684.192 1.381.22 2.084.173.136-.009.271-.025.419-.038l-.038-.683c.206-.05.4-.091.592-.146.251-.071.5-.152.749-.23.039-.012.091-.017.074-.096-.474.131-.938.287-1.425.371-.004-.028-.009-.045-.01-.062-.001-.017.003-.034.006-.054l.092-.025 1.218-.328c.03-.008.062-.014.087-.031.016-.009.022-.036.045-.081-.499.142-.971.27-1.462.35-.012-.116-.028-.223-.004-.332.154-.032.302-.057.448-.094.3-.075.6-.156.899-.234.039-.011.078-.018.062-.091-.467.129-.926.274-1.412.345v-.121c.478-.089.944-.208 1.408-.361a13.004 13.004 0 0 0-.025-.272c-.056-.565-.1-1.131-.173-1.693-.1-.778-.214-1.555-.338-2.329a13.783 13.783 0 0 0-.422-1.811 3.256 3.256 0 0 0-1.392-1.85 7.681 7.681 0 0 0-.573-.338c-.727-.384-1.499-.66-2.269-.941a.269.269 0 0 0-.141-.002c-.702.15-1.401.312-2.105.451-.952.189-1.912.337-2.877.442-.182.02-.351.058-.516.151-.266.15-.557.249-.854.327a5.585 5.585 0 0 1-2.044.139c-.516-.058-1.012-.186-1.47-.433a1.3 1.3 0 0 0-.476-.142 55.344 55.344 0 0 1-1.951-.257 24.501 24.501 0 0 1-3.076-.668.43.43 0 0 0-.246.001c-.567.164-1.118.37-1.651.625a6.924 6.924 0 0 0-1.313.803c-.563.443-.975.988-1.163 1.689-.015.056-.034.11-.05.165-.244.836-.394 1.692-.527 2.55a54.306 54.306 0 0 0-.37 3.036c-.011.109-.017.219-.027.346l1.278.388a3.527 3.527 0 0 0-.012.104c-.437-.088-.848-.236-1.264-.37-.023.061.008.075.043.087.135.044.269.092.404.132.272.079.544.154.819.231v.326c-.451-.093-.877-.235-1.315-.374.023.08.022.083.092.106l1.101.352c.033.01.066.022.104.035l-.015.112c-.443-.104-.861-.261-1.284-.4-.031.088.034.093.074.106.361.121.723.239 1.085.357l.116.037-.036.648c.043.012.068.022.094.026.07.012.14.026.211.032.695.05 1.39.079 2.085.001.189-.022.377-.057.553-.137.084-.039.127-.094.127-.195-.002-.226.013-.452.017-.678.016-1.087.03-1.861.045-2.948-.007-.103.382-.543.888.305Zm11.307-9.44c-.165.064-.315.118-.462.179a7.882 7.882 0 0 1-2.932.63 8.268 8.268 0 0 1-1.876-.168 8.073 8.073 0 0 1-1.461-.484c-.055-.024-.112-.042-.188-.07.011.136.018.25.03.364.057.527.233 1.009.56 1.43.395.511.92.824 1.535.994.735.204 1.479.211 2.226.067a3.623 3.623 0 0 0 1.472-.616c.615-.447.994-1.039 1.089-1.799.02-.167.041-.335.007-.527Zm-9.425 1.407a.37.37 0 0 1-.013.029c.077.063.156.124.231.189.098.086.22.076.329.061.049-.007.087-.099.129-.154a.293.293 0 0 0 .035-.056c.043-.095.108-.128.213-.101.115.029.233.043.352.064l.16-.344c.075-.161.042-.147.222-.142.079.002.159.005.239.005.081 0 .193-.092.189-.168-.007-.117-.03-.234-.051-.382-.066.081-.114.137-.158.196a.13.13 0 0 1-.124.059c-.106-.006-.213-.002-.319-.011-.074-.006-.113.023-.143.087-.065.135-.136.267-.206.404l-.488-.077-.188.381-.409-.04Zm11.43.04a44.52 44.52 0 0 1-.19-.383l-.486.08-.134-.261c-.04-.074-.066-.173-.128-.211-.062-.037-.162-.013-.245-.013-.119 0-.244.034-.339-.104l-.064.396c.14 0 .262.005.385-.001.077-.004.121.017.152.092.055.134.12.264.182.398.135-.024.261-.045.387-.07.069-.013.119.004.154.068.039.07.081.138.127.203.016.023.043.047.069.052.186.034.445-.103.54-.287l-.41.041Zm-10.903.35c.151.089.293.135.436.175.03.009.07-.006.102-.018.424-.171.78-.447 1.143-.723l-.079-.264c-.513.328-1.001.664-1.602.83Zm10.757.018c-.253-.115-.507-.218-.748-.344-.246-.129-.48-.282-.724-.428l-.088.261c.125.092.241.188.369.266.211.13.428.249.644.37.038.02.088.041.126.033.15-.033.293-.09.421-.158Zm6.432 10.999c.142.024.265.04.386.066.099.021.161-.008.228-.086.188-.22.133-.215.406-.138.028.007.075 0 .093-.02a.686.686 0 0 0 .178-.442l-.18.222-.441-.123-.26.347-.425-.151.015.325Zm-24.379-.57c-.115.028-.223.052-.329.08-.065.018-.127.036-.182-.06l-.011.145a.107.107 0 0 0 .005.04.18.18 0 0 0 .224.124c.128-.04.222-.013.293.103a.7.7 0 0 0 .111.132c.023.022.059.046.087.044.154-.011.307-.03.462-.047a.897.897 0 0 0 .015-.322l-.416.125-.259-.364Zm8.69-12.202a.163.163 0 0 1-.02-.017c-.024.019-.049.036-.072.055a5.136 5.136 0 0 1-1.218.748c-.271.117-.551.214-.827.321-.033.012-.064.029-.095.044l.013.035c.035-.007.072-.011.106-.023a10.7 10.7 0 0 0 1.273-.528c.306-.151.561-.368.812-.593.012-.011.018-.028.028-.042Zm10.005 1.18.012-.041c-.756-.241-1.471-.561-2.102-1.054.003.029.01.055.027.069.168.129.328.273.509.38.462.273.964.462 1.47.637.026.009.056.007.084.009Zm-10.825.817c.086.075.155.055.226.004.25-.181.502-.36.754-.539.025-.018.053-.034.071-.058.011-.016.006-.045.011-.092-.349.256-.675.506-1.062.685Zm9.405.017-.944-.61c-.043.047-.003.067.024.086.245.175.491.348.735.524.067.048.128.044.185 0Zm-8.176-.301-.646.467c.076.037.126.024.177-.014.148-.11.3-.217.449-.326.024-.017.043-.039.066-.061a3.773 3.773 0 0 1-.046-.066Zm7.034.049-.05.079c.145.103.285.203.423.304.045.032.087.03.151-.003l-.524-.38Zm-7.362.466c.172.041.174.043.267-.052.061-.062.118-.129.175-.196.012-.015.011-.04.024-.09l-.466.338Zm-1.539-1.676a12.884 12.884 0 0 1-.142-.042l-.082.127.095.109.129-.049v-.145Zm9.104 1.635c-.117-.085-.222-.167-.356-.255.004.051-.001.076.008.088.039.049.083.092.123.14.061.076.131.076.225.027Zm1.608-1.628a5.13 5.13 0 0 0-.02.136l.164.063c-.036-.078.033-.095.076-.114l-.096-.135-.124.05Z" />
      <path d="M490.619 194.041a1.598 1.598 0 1 1-3.198.002 1.598 1.598 0 0 1 3.198-.002Zm-.084.001a1.515 1.515 0 0 0-3.029-.002 1.515 1.515 0 0 0 3.029.002Z" />
      <path d="M489.083 194.399c-.086 0-.171-.004-.256-.015-.01-.001-.017-.004-.023-.013l-.318-.477c-.008-.012-.01-.023-.005-.035.016-.042.03-.084.049-.124.031-.067.069-.132.099-.2.02-.043.048-.082.071-.124.003-.004.009-.009.014-.009.154-.021.309-.027.464-.014l.152.011c.004.001.011.005.013.009l.07.112c.059.098.109.2.159.302a.095.095 0 0 1 .005.072.773.773 0 0 1-.065.147c-.041.077-.079.155-.131.225l-.076.1a.061.061 0 0 1-.049.025c-.058.001-.115.005-.173.008ZM489.058 194.48l.247-.008a.026.026 0 0 1 .025.01c.085.111.165.224.242.34.017.026.018.05.002.076-.042.07-.082.142-.126.211a.802.802 0 0 1-.064.089.072.072 0 0 1-.036.024.943.943 0 0 1-.128.028 2.156 2.156 0 0 1-.368.018c-.047-.002-.094-.009-.141-.015-.023-.003-.038-.015-.05-.035a3.175 3.175 0 0 1-.176-.324c-.003-.008-.003-.014.002-.02l.073-.093.169-.215.068-.089c.005-.007.011-.009.019-.009l.242.012ZM487.743 193.616c.006-.021.01-.043.019-.064.054-.135.13-.259.22-.373l.084-.104c.004-.005.01-.01.016-.011.114-.03.229-.049.347-.044.014.001.024.005.031.018.056.084.108.172.148.265a.12.12 0 0 1-.006.119c-.039.066-.075.133-.112.2a1.272 1.272 0 0 0-.085.202c-.005.014-.011.02-.026.021-.106.008-.21.024-.312.048l-.17.039c-.01.002-.017.002-.022-.01l-.117-.252c-.007-.016-.01-.035-.015-.054ZM489.71 193.004h.092c.066.004.128.019.173.072a1.536 1.536 0 0 1 .244.369c.024.051.041.105.06.158a.05.05 0 0 1-.003.032.275.275 0 0 1-.037.07c-.038.052-.079.101-.119.15l-.028.037c-.008.011-.018.016-.034.013-.064-.009-.129-.016-.193-.027-.06-.009-.118-.02-.178-.03-.009-.002-.013-.006-.017-.015a1.526 1.526 0 0 0-.107-.214c-.045-.076-.089-.152-.135-.227a.084.084 0 0 1-.006-.077c.042-.105.093-.204.155-.298.007-.01.014-.015.026-.015h.107v.002ZM490.144 194.623c.053.026.105.051.156.078.003.001.005.009.004.011-.007.018-.014.037-.025.053a4.595 4.595 0 0 1-.13.181 1.319 1.319 0 0 1-.388.341c-.06.036-.125.062-.188.092-.017.008-.03.006-.043-.008a2.356 2.356 0 0 0-.086-.087c-.007-.008-.008-.014-.002-.022l.014-.02a1.48 1.48 0 0 0 .205-.339.07.07 0 0 1 .055-.046.9.9 0 0 0 .313-.139c.034-.024.064-.052.096-.078l.019-.017ZM487.754 194.741l.052-.03.082-.043c.013-.007.022-.006.033.005a.723.723 0 0 0 .114.091.922.922 0 0 0 .319.124c.037.006.038.006.054.04.056.121.123.235.192.349l.006.011-.013.011a.543.543 0 0 0-.094.085c-.002.003-.01.005-.014.003-.023-.009-.047-.017-.069-.028-.103-.048-.194-.116-.286-.184a1.205 1.205 0 0 1-.217-.199 1.812 1.812 0 0 1-.157-.228l-.002-.007ZM490.48 194.026a2.736 2.736 0 0 1-.028.313.927.927 0 0 1-.083.268c-.012.027-.008.026-.036.014a4.227 4.227 0 0 1-.135-.067.017.017 0 0 1-.006-.011c.003-.031.009-.061.011-.091.003-.066.009-.132.004-.199a1.49 1.49 0 0 0-.05-.296c-.001-.004.001-.011.005-.015l.054-.056a.576.576 0 0 0 .075-.114l.046-.082c.004-.007.009-.009.017-.008.017.003.035.004.053.005.021.002.034.013.039.033.008.037.018.074.022.112.007.064.01.129.015.193l-.003.001ZM487.68 193.698l.03.069c.019.045.038.09.059.135.012.025.026.049.04.073a.07.07 0 0 1 .007.045 1.084 1.084 0 0 0 .022.487l.016.072c.002.009 0 .014-.009.018l-.118.06-.012.006-.026-.049a1.343 1.343 0 0 1-.085-.279 1.317 1.317 0 0 1-.002-.572l.007-.038c.001-.004.006-.009.009-.011l.062-.016ZM488.981 192.592l.003.07c0 .002-.006.006-.01.007l-.171.064a1.05 1.05 0 0 0-.205.1c-.038.025-.074.054-.11.082a.087.087 0 0 1-.056.023c-.098-.002-.193.019-.288.035l-.087.011-.003-.005c.005-.009.008-.019.014-.025a.556.556 0 0 1 .05-.047c.088-.07.189-.119.29-.166.085-.04.171-.077.261-.105a.876.876 0 0 1 .216-.04 2.36 2.36 0 0 1 .084-.004h.012ZM489.903 192.934l-.098-.014a1.226 1.226 0 0 0-.21-.006l-.005.001a.09.09 0 0 1-.083-.029.544.544 0 0 0-.185-.115c-.085-.035-.171-.067-.257-.1l-.012-.005v-.073l.026-.002c.095-.002.188.011.281.033.159.037.31.095.447.186.033.022.064.048.096.072.004.003.006.011.006.016l-.006.036Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(460 179)" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
     );
}
 
export default Numero5;