const Numero4 = ({fill, height = 1500, width = 1200}) => {
    return (
       <svg
        viewBox={`0 0 ${height} ${width}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="svg-responsive"
  >
    <path
      d="M1123.88 130.561c0 .41-.08.791-.25 1.143-.14.351-.35.659-.61.922a2.79 2.79 0 0 1-.9.594c-.35.146-.73.219-1.12.219-.35 0-.71-.065-1.08-.197a2.448 2.448 0 0 1-.94-.638l-20.88-21.796V133h-5.71v-29.07c0-.586.16-1.113.48-1.582.34-.483.76-.842 1.28-1.077.54-.219 1.1-.271 1.67-.153.57.102 1.06.366 1.47.791l20.87 21.775v-22.193h5.72v29.07Zm34.12-10.305c0 1.919-.33 3.684-.99 5.295a12.419 12.419 0 0 1-2.74 4.175c-1.17 1.172-2.57 2.087-4.18 2.747-1.59.644-3.34.966-5.23.966h-7.73c-1.89 0-3.64-.322-5.25-.966-1.61-.66-3.01-1.575-4.18-2.747s-2.09-2.563-2.77-4.175c-.65-1.611-.98-3.376-.98-5.295v-6.021c0-1.904.33-3.662.98-5.273.68-1.626 1.6-3.018 2.77-4.175 1.17-1.172 2.57-2.087 4.18-2.746 1.61-.66 3.36-.989 5.25-.989h7.73c1.89 0 3.64.329 5.23.989 1.61.659 3.01 1.574 4.18 2.746 1.17 1.157 2.09 2.549 2.74 4.175.66 1.611.99 3.369.99 5.273v6.021Zm-5.71-6.021c0-1.128-.18-2.146-.55-3.054a6.428 6.428 0 0 0-1.52-2.351c-.64-.659-1.42-1.164-2.35-1.516-.9-.366-1.91-.549-3.01-.549h-7.73c-1.11 0-2.13.183-3.06.549a6.79 6.79 0 0 0-2.35 1.516 6.58 6.58 0 0 0-1.53 2.351c-.36.908-.53 1.926-.53 3.054v6.021c0 1.128.17 2.153.53 3.076.36.908.87 1.692 1.53 2.351.66.645 1.45 1.15 2.35 1.516.93.352 1.95.528 3.06.528h7.69c1.11 0 2.12-.176 3.03-.528.92-.366 1.72-.871 2.37-1.516a6.679 6.679 0 0 0 1.52-2.351c.37-.923.55-1.948.55-3.076v-6.021ZM1194.72 133h-5.75v-18.765l-10.13 17.82c-.25.454-.6.799-1.06 1.033a2.98 2.98 0 0 1-1.43.351c-.49 0-.96-.117-1.4-.351-.43-.234-.76-.579-1.01-1.033l-10.18-17.82V133h-5.71v-29.07c0-.659.19-1.245.57-1.758.4-.512.91-.857 1.54-1.032.31-.074.61-.096.92-.066.31.014.6.08.88.197.29.103.56.257.79.462.24.19.43.425.6.703l13 22.61 13.01-22.61c.34-.557.8-.952 1.39-1.186.6-.235 1.22-.271 1.86-.11.62.175 1.12.52 1.52 1.032.39.513.59 1.099.59 1.758V133Zm32.5-6.921c0 .703-.12 1.457-.37 2.263a6.26 6.26 0 0 1-1.19 2.241c-.54.688-1.25 1.267-2.13 1.736-.88.454-1.95.681-3.23.681h-21.69a2.976 2.976 0 0 1-2.06-.813 2.882 2.882 0 0 1-.59-.923 2.874 2.874 0 0 1-.22-1.142V104.37c0-.396.07-.769.22-1.121.14-.352.34-.659.59-.923.26-.264.57-.469.92-.615.35-.147.73-.22 1.14-.22h19.12c.7 0 1.46.125 2.26.374.81.249 1.56.652 2.25 1.208.7.542 1.28 1.253 1.73 2.132.47.878.7 1.955.7 3.23v1.076c0 1.011-.16 2.102-.5 3.274a10.822 10.822 0 0 1-1.63 3.296 9.42 9.42 0 0 1 1.8 1.428 8.86 8.86 0 0 1 1.5 1.934c.42.732.76 1.56 1.01 2.483s.37 1.941.37 3.054v1.099Zm-5.71-1.099c0-.747-.12-1.414-.35-2-.24-.6-.57-1.113-.99-1.538a4.221 4.221 0 0 0-1.54-.966c-.6-.235-1.27-.352-2.02-.352h-12.88v-5.757h10.31c.75 0 1.42-.11 2.02-.329.6-.235 1.11-.564 1.54-.989.42-.425.75-.93.97-1.516a5.62 5.62 0 0 0 .35-2.022v-1.076c0-.821-.4-1.231-1.19-1.231h-16.28v20.083h18.85c.1 0 .23-.007.38-.022a.919.919 0 0 0 .39-.132c.12-.073.22-.197.31-.373s.13-.418.13-.725v-1.055Zm36.59-12.898c0 1.304-.16 2.468-.49 3.494a9.916 9.916 0 0 1-1.31 2.724 9.488 9.488 0 0 1-1.89 2c-.72.556-1.48 1.018-2.27 1.384-.77.352-1.56.608-2.37.769-.79.161-1.54.242-2.24.242L1259.46 133h-8.83l-11.91-10.305h-4.11v-5.713h12.92a6.607 6.607 0 0 0 1.95-.44c.6-.249 1.12-.578 1.54-.988.44-.41.78-.901 1.01-1.472.24-.586.35-1.253.35-2v-3.603c0-.323-.04-.564-.13-.726a.708.708 0 0 0-.3-.373.79.79 0 0 0-.4-.154 3.318 3.318 0 0 0-.37-.022h-18.86V133h-5.71v-28.63c0-.396.07-.769.22-1.121s.34-.659.59-.923a2.914 2.914 0 0 1 2.07-.835h21.69c1.27 0 2.35.235 3.23.703.88.454 1.59 1.033 2.13 1.736.55.689.95 1.436 1.18 2.241.25.806.38 1.56.38 2.264v3.647Zm26.04 8.042h-18.04v-5.757h18.04v5.757Zm2.57 12.876h-20.61c-.79 0-1.66-.139-2.59-.417a7.897 7.897 0 0 1-2.62-1.363c-.79-.644-1.46-1.472-2-2.483-.53-1.025-.79-2.278-.79-3.757v-20.61c0-.396.07-.769.22-1.121s.34-.659.59-.923a2.914 2.914 0 0 1 2.07-.835h25.73v5.713h-22.9v17.776c0 .747.2 1.318.6 1.714.39.395.97.593 1.73.593h20.57V133ZM1128.64 295h-25.48V180.352h-22.95v-25.391h48.43V295Zm165.05-58.594c0 5.729-.75 11.166-2.24 16.309-1.44 5.078-3.49 9.798-6.16 14.16s-5.82 8.268-9.47 11.719a61.531 61.531 0 0 1-12.01 8.886 59.357 59.357 0 0 1-13.77 5.567A57.708 57.708 0 0 1 1235.1 295h-45.8c-5.15 0-10.16-.651-15.04-1.953a61.206 61.206 0 0 1-13.87-5.567 62.715 62.715 0 0 1-11.91-8.886 56.985 56.985 0 0 1-9.48-11.719c-2.6-4.362-4.65-9.082-6.15-14.16-1.43-5.143-2.15-10.58-2.15-16.309v-22.851c0-8.594 1.6-16.472 4.79-23.633 3.25-7.162 7.58-13.314 12.99-18.457 5.4-5.208 11.62-9.245 18.65-12.11a57.586 57.586 0 0 1 22.17-4.394h45.8c5.08 0 10.06.651 14.94 1.953a56.89 56.89 0 0 1 13.77 5.664 58.587 58.587 0 0 1 12.01 8.789c3.65 3.451 6.8 7.357 9.47 11.719 2.67 4.362 4.72 9.115 6.16 14.258 1.49 5.078 2.24 10.482 2.24 16.211v22.851Zm-25.58-22.851c0-5.013-.92-9.571-2.74-13.672-1.82-4.102-4.26-7.617-7.32-10.547-3-2.93-6.48-5.176-10.45-6.738-3.97-1.563-8.14-2.312-12.5-2.246h-45.8c-4.23-.066-8.37.683-12.4 2.246-3.98 1.497-7.52 3.711-10.65 6.64-3.06 2.865-5.53 6.38-7.42 10.547-1.82 4.102-2.74 8.692-2.74 13.77v22.851c0 5.078.92 9.668 2.74 13.77 1.82 4.101 4.26 7.617 7.32 10.547 3.06 2.864 6.58 5.078 10.55 6.64a33.225 33.225 0 0 0 12.6 2.246h45.8c5.01 0 9.54-.813 13.57-2.441 4.1-1.693 7.59-4.004 10.45-6.934 2.87-2.929 5.08-6.412 6.64-10.449 1.57-4.101 2.35-8.561 2.35-13.379v-22.851ZM1257.07 195a12.243 12.243 0 0 1 1.95 4.688c.33 1.627.33 3.255 0 4.882-.32 1.563-.97 3.06-1.95 4.492-.91 1.368-2.11 2.54-3.61 3.516l-68.56 45.801c-1.1.846-2.24 1.432-3.41 1.758-1.18.325-2.38.488-3.62.488-2.08 0-4.07-.488-5.96-1.465-1.88-.976-3.41-2.376-4.58-4.199a12.43 12.43 0 0 1-1.96-4.59c-.32-1.693-.36-3.32-.1-4.883a12.52 12.52 0 0 1 1.86-4.492c.91-1.432 2.12-2.637 3.61-3.613l68.75-45.801c1.44-.977 2.97-1.628 4.59-1.953 1.7-.326 3.32-.326 4.89 0 1.62.325 3.12.944 4.49 1.855 1.43.912 2.63 2.084 3.61 3.516ZM358.675 224h-12.234v-55.031h-11.016v-12.188h23.25V224Zm84.931-28.125c0 2.75-.359 5.359-1.078 7.828a26.973 26.973 0 0 1-2.953 6.797 27.364 27.364 0 0 1-4.547 5.625 29.633 29.633 0 0 1-5.766 4.266 28.392 28.392 0 0 1-6.609 2.671 27.673 27.673 0 0 1-7.172.938h-21.984c-2.469 0-4.875-.312-7.219-.938a29.327 29.327 0 0 1-6.656-2.671 30.283 30.283 0 0 1-5.719-4.266 27.364 27.364 0 0 1-4.547-5.625 29.447 29.447 0 0 1-2.953-6.797c-.687-2.469-1.031-5.078-1.031-7.828v-10.969c0-4.125.765-7.906 2.297-11.344 1.562-3.437 3.64-6.39 6.234-8.859a28.001 28.001 0 0 1 8.953-5.812 27.606 27.606 0 0 1 10.641-2.11h21.984c2.438 0 4.828.313 7.172.938a27.227 27.227 0 0 1 6.609 2.719 28.157 28.157 0 0 1 5.766 4.218 27.39 27.39 0 0 1 4.547 5.625 26.815 26.815 0 0 1 2.953 6.844c.719 2.437 1.078 5.031 1.078 7.781v10.969Zm-12.281-10.969c0-2.406-.438-4.594-1.313-6.562-.875-1.969-2.046-3.656-3.515-5.063a14.9 14.9 0 0 0-5.016-3.234 15.597 15.597 0 0 0-6-1.078h-21.984a15.683 15.683 0 0 0-5.953 1.078 15.294 15.294 0 0 0-5.11 3.187c-1.468 1.375-2.656 3.063-3.562 5.063-.875 1.969-1.313 4.172-1.313 6.609v10.969c0 2.437.438 4.641 1.313 6.609.875 1.969 2.047 3.657 3.515 5.063a15.805 15.805 0 0 0 5.063 3.187 15.92 15.92 0 0 0 6.047 1.078h21.984c2.406 0 4.578-.39 6.516-1.171 1.969-.813 3.64-1.922 5.015-3.329 1.375-1.406 2.438-3.078 3.188-5.015.75-1.969 1.125-4.109 1.125-6.422v-10.969ZM426.028 176c.469.688.781 1.438.938 2.25a5.929 5.929 0 0 1 0 2.344 5.984 5.984 0 0 1-.938 2.156 5.974 5.974 0 0 1-1.734 1.688l-32.907 21.984a4.852 4.852 0 0 1-1.64.844 6.466 6.466 0 0 1-1.735.234c-1 0-1.953-.234-2.859-.703a5.69 5.69 0 0 1-2.203-2.016 5.96 5.96 0 0 1-.938-2.203 6.6 6.6 0 0 1-.046-2.344c.156-.781.453-1.5.89-2.156a5.738 5.738 0 0 1 1.735-1.734l33-21.985a5.921 5.921 0 0 1 4.546-.937c.782.156 1.5.453 2.157.89.687.438 1.265 1 1.734 1.688Z"
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
 
export default Numero4;