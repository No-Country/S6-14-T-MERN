const Base = ({fill, height = 1500, width = 1200}) => {
  return ( 
      <svg
      viewBox={`0 0 ${height} ${width}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-responsive"

    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m475.831 36.03-.12.27c.059-.144.121-.29.183-.436l.001-.002.001-.003.001-.002.151-.359-.076.187c-.045.112-.092.229-.141.345Zm4.231-10.951-.101.29.23-.67c.077-.227.153-.45.23-.67-.111.34-.233.69-.359 1.049v.001Zm-13.169 19.754-.077.034.335-.147c-.087.037-.173.074-.258.113Zm.61-.263.003-.002c.216-.091.432-.183.641-.275l-.942.404.298-.127Zm-162.352-1.08-.154-.074.734.33a54.94 54.94 0 0 0-.58-.256ZM299.4 36.3l-.119-.27c-.05-.116-.097-.233-.143-.346l-.035-.087-.038-.093.151.356.184.44Zm-4.254-10.943-.097-.277c-.125-.359-.248-.71-.358-1.05.076.219.152.442.229.67l.002.003c.073.215.147.434.224.654Zm-1.916-6.278c-.119-.45-.209-.879-.289-1.279l.044.2.036.164c.065.293.132.6.209.915Zm-.47-5.449c-.05.16-.099.34-.129.56.02-.22.07-.4.129-.56Zm2.541-.11c.08.06.16.12.24.17-.43-.35-.8-.66-1.16-.98-.173-.144-.343-.297-.513-.45a12.63 12.63 0 0 0-.737-.63c-.5-.38-1.15-.71-1.9-.71-.85 0-1.65.42-2.26 1.13-.81.95-2.13 2.34-3.78 3.97-1.951 1.927-5.601 4.963-8.794 7.62-.817.68-1.605 1.335-2.326 1.94-.14.12-.29.24-.44.36l-1.001.81c-9.34 7.569-29.878 24.213-74.559 43.85-.834.367-1.776.776-2.812 1.227h-.003l-.001.001C186.806 75.5 172.079 81.9 158.471 90.44c-3.236 3.235-4.971 7.728-5.101 12.324.087-4.605 1.822-9.122 5.101-12.364-4.13 2.57-8.12 5.36-11.86 8.25v.01c-2.2 1.7-6.18 5.74-8.16 7.92-17.09 18.87-21.48 40.58-30.1 113.87-2.495 21.166-8.287 39.506-14.726 59.891-2.361 7.477-4.81 15.23-7.214 23.499-.221.766-.721 1.373-1.234 1.995-.88 1.069-1.798 2.184-1.407 4.225l.004.003.012.037.012.037c.176.544 1.145 3.541 1.362 5.993.244 2.792-1.387 7.194-3.806 13.721l-.204.549c-.39 1.01-.59 2.08 0 2.98.806 1.259 6.244 3.943 8.08 4.849v.001c.307.151.513.253.58.29 16.751 9.31 65.831 25.41 94.271 26.11 1.839.051 2.252-1.145 2.523-1.927.044-.128.084-.245.127-.343.374-.879.757-1.806 1.146-2.746 1.74-4.206 3.594-8.688 5.294-10.404 1.25-1.279 3.787-4.325 3.942-4.511l.018.001c1.329-1.149 1.704-3.55 1.992-5.389.128-.818.238-1.524.408-1.961 1.417-3.644 2.589-6.246 3.762-8.849l.001-.001c.747-1.658 1.495-3.317 2.306-5.247.055.813.108 1.629.161 2.447.85 6.81 1.64 13.79 2.34 20.93l.004.009.003.013.002.013a.209.209 0 0 1 .001.025c2 10.13 1.881 20.983 1.754 32.617V379.316a798.748 798.748 0 0 0-.064 8.854s3.12 51.74 1.02 77.3c.122 7.625-.014 14.778-.149 21.902-.164 8.618-.327 17.195-.031 26.518.307 18.729-1.142 36.552-2.463 52.805-.44 5.407-.865 10.64-1.207 15.675-.702 10.331-2.056 19.559-3.627 30.273-1.495 10.193-3.187 21.733-4.703 36.847-1.866 18.544-2.313 28.322-2.869 40.492-.589 12.873-1.299 28.424-3.941 59.858-.44 5.3-.99 10.57-1.81 15.78-.275 1.771-.4 3.531-.489 5.28h-.011l.01.008c-.028.553-.052 1.105-.076 1.655-.163 3.667-.323 7.282-1.534 10.837-.034.099-.072.203-.112.313l-.122.327-.001.002c-.739 1.976-1.967 5.254.735 8.188 1.69 1.84 5.39 3.24 10.08 4.32 3.24.74 6.94 1.33 10.78 1.8 3.84.46 7.81.8 11.58 1.06 7.822.891 17.553.063 28.975-.909H249.853c13.455-1.145 29.254-2.488 47.038-1.461 6.797.393 13.885.828 21.241 1.28h.002l.002.001c21.083 1.294 44.378 2.725 69.405 3.689h.05c25.026-.964 48.321-2.395 69.404-3.689l.002-.001h.002c7.356-.452 14.444-.887 21.242-1.28 17.783-1.027 33.582.316 47.037 1.461H525.295c11.421.972 21.153 1.8 28.976.909 3.77-.26 7.74-.6 11.58-1.06 3.84-.47 7.54-1.06 10.78-1.8 4.69-1.08 8.39-2.48 10.08-4.32 2.701-2.934 1.474-6.212.734-8.188a21.23 21.23 0 0 1-.234-.642c-1.212-3.555-1.372-7.17-1.534-10.837v-.001l-.049-1.08-.029-.593.05-.037.032-.022h-.085c-.089-1.726-.214-3.463-.485-5.21-.82-5.21-1.37-10.48-1.81-15.78-2.643-31.434-3.353-46.984-3.941-59.858v-.001c-.557-12.169-1.003-21.947-2.869-40.491-1.517-15.114-3.209-26.653-4.704-36.847v-.001c-1.571-10.714-2.924-19.942-3.626-30.272-.342-5.035-.768-10.268-1.208-15.675v-.002c-1.321-16.252-2.77-34.074-2.462-52.803.295-9.323.132-17.9-.031-26.518-.136-7.124-.272-14.277-.149-21.902-2.1-25.56 1.02-77.3 1.02-77.3 0-3.004-.033-5.958-.065-8.863-.127-11.634-.246-22.487 1.755-32.617v-.06c.7-7.14 1.49-14.12 2.34-20.92.052-.821.106-1.639.161-2.455a212.78 212.78 0 0 0 2.306 5.246c1.173 2.603 2.345 5.205 3.763 8.849.169.437.279 1.143.407 1.961.288 1.839.663 4.24 1.993 5.389l.007-.001c.16.193 2.694 3.233 3.943 4.511 1.699 1.716 3.553 6.198 5.293 10.404l.001.003.006.015c.387.934.767 1.855 1.14 2.728.042.098.082.215.126.343.271.782.685 1.978 2.524 1.927 28.44-.7 77.52-16.8 94.27-26.11l.068-.036.086-.043c.102-.052.246-.123.423-.21l.003-.001c1.836-.907 7.274-3.59 8.08-4.85.59-.9.39-1.97 0-2.98l-.203-.548c-2.419-6.528-4.051-10.93-3.807-13.722.218-2.452 1.186-5.449 1.362-5.993l.02-.063.018-.014c.391-2.041-.527-3.156-1.407-4.225-.513-.622-1.013-1.229-1.233-1.995-2.405-8.269-4.854-16.022-7.215-23.499-6.438-20.385-12.231-38.725-14.725-59.891-8.62-73.29-13.01-95-30.1-113.87-1.98-2.18-5.96-6.22-8.16-7.92v-.01c-3.74-2.89-7.73-5.68-11.86-8.25 3.519 3.48 5.259 8.427 5.093 13.376.114-4.943-1.631-9.864-5.103-13.336-13.609-8.541-28.336-14.94-36.785-18.612l-.385-.167c-.887-.386-1.7-.74-2.43-1.061-44.682-19.637-65.22-36.281-74.56-43.85l-1-.81-.002-.001c-.149-.12-.299-.24-.438-.36-.722-.604-1.509-1.26-2.327-1.94h-.001c-3.193-2.657-6.842-5.692-8.792-7.62-1.65-1.63-2.97-3.02-3.78-3.97-.61-.71-1.41-1.13-2.26-1.13-.75 0-1.4.33-1.9.71-.253.195-.496.413-.738.631-.17.153-.339.306-.512.45-.36.32-.73.63-1.16.98.079-.05.159-.11.239-.17h.001c-.054.047-.107.084-.16.122l-.06.043-.02.015v.02c-9.94 8-37.71 24.12-91.44 24.17h-1.13c-53.72-.05-81.5-16.17-91.43-24.17l-.02-.02c-.08-.05-.16-.1-.24-.17l-.01-.01Zm386.826 302.123c-9.272 4.917-25.409 11.599-44.821 17.387 18.481-5.576 34.866-12.127 44.821-17.387ZM482.481 14.19c-.03-.22-.08-.4-.13-.56.06.16.11.34.13.56Zm-.388 3.961.078-.351c-.08.4-.17.83-.29 1.28.077-.316.144-.622.209-.915l.003-.014Zm-.912 3.469c.28-.93.52-1.77.7-2.54-.19.77-.42 1.61-.7 2.54Zm11.606 31.47ZM90.798 314.445c8.858 5.035 26.296 12.452 47.613 18.765l.097.028c-20.2-6.051-37.973-13.293-47.71-18.793ZM479.541 13.69h.02l-.02.02v-.02Zm908.289 770.352c-.08-.233-.16-.448-.23-.642v-.01c-1.21-3.555-1.37-7.17-1.53-10.837v-.022c-.03-.56-.05-1.122-.08-1.684l.02-.017h-.02c-.09-1.729-.22-3.47-.49-5.22-.82-5.21-1.37-10.48-1.81-15.78-2.64-31.434-3.35-46.984-3.94-59.858-.56-12.17-1-21.948-2.87-40.492-1.51-15.097-3.2-26.627-4.7-36.813V612.631c-1.57-10.713-2.93-19.941-3.63-30.271-.34-5.035-.77-10.268-1.21-15.674v-.001c-1.32-16.253-2.77-34.076-2.46-52.805.3-9.315.13-17.884-.03-26.494v-.024c-.14-7.124-.27-14.277-.15-21.902-2.1-25.56 1.02-77.3 1.02-77.3 0-3.003-.03-5.957-.06-8.862-.13-11.634-.25-22.488 1.75-32.618v-.06c.7-7.14 1.49-14.12 2.34-20.93.05-.815.11-1.628.16-2.438.81 1.93 1.56 3.59 2.31 5.249v.001c1.17 2.603 2.34 5.204 3.76 8.848.17.437.28 1.144.41 1.961.29 1.839.66 4.24 1.99 5.389l.02-.001c.15.183 2.69 3.231 3.94 4.511 1.7 1.716 3.55 6.197 5.29 10.404l.01.011.02.041v.021c.26.608.5 1.21.75 1.796.12.297.25.589.37.877.04.098.08.214.13.34v.003c.27.782.68 1.978 2.52 1.927 28.44-.7 77.52-16.8 94.27-26.11.07-.037.27-.138.57-.287l.01-.003c1.84-.907 7.28-3.59 8.08-4.85.59-.9.39-1.97.01-2.98l-.2-.548c-2.42-6.528-4.05-10.93-3.81-13.722.22-2.452 1.19-5.449 1.36-5.993l.03-.087-.01.008c.39-2.04-.53-3.154-1.41-4.223-.51-.622-1.01-1.229-1.23-1.995-2.4-8.264-4.85-16.013-7.21-23.487v-.012c-6.44-20.386-12.23-38.725-14.73-59.891-8.62-73.29-13.01-95-30.1-113.87-1.98-2.18-5.96-6.22-8.16-7.92v-.01c-3.74-2.89-7.73-5.68-11.86-8.25 3.28 3.24 5.01 7.754 5.1 12.356-.13-4.593-1.87-9.082-5.1-12.316-13.61-8.541-28.33-14.94-36.78-18.612-1.04-.45-1.98-.86-2.82-1.228-44.68-19.637-65.22-36.281-74.56-43.85l-.01-.009c-.34-.28-.67-.547-.99-.801h-.01c-.15-.12-.3-.24-.44-.36-.72-.605-1.51-1.26-2.33-1.94-3.19-2.657-6.84-5.693-8.79-7.62-1.65-1.63-2.97-3.02-3.78-3.97-.61-.71-1.41-1.13-2.26-1.13-.75 0-1.4.33-1.9.71-.25.194-.49.412-.74.63v.001c-.17.153-.34.305-.51.449-.36.32-.73.63-1.16.98.04-.02.08-.05.12-.08l-.12.09h-.01v.02c-9.94 8-37.71 24.12-91.44 24.17h-1.14c-53.73-.05-81.5-16.17-91.43-24.17v-.02h-.02l-.02-.014c0-.004-.01-.008-.01-.011v-.001c-.01-.009-.01-.017-.02-.024-.41-.33-.76-.62-1.11-.93-.17-.144-.34-.296-.51-.449v-.001c-.24-.218-.49-.436-.74-.63-.5-.38-1.15-.71-1.9-.71s-1.44.32-2.01.88c-.09.07-.17.16-.25.249-.27.31-.59.67-.95 1.07-.24.27-.51.55-.8.85-.29.309-.61.631-.95.97-.15.157-.31.317-.47.48-.19.2-.39.4-.6.6h-.01c-1.95 1.928-5.6 4.964-8.79 7.62-.82.68-1.61 1.335-2.33 1.94-.06.055-.13.107-.19.16v.003c-.08.063-.16.128-.24.198h-.01s-.05.047-.07.059l.01-.01c-.01.007-.01.013-.02.019l-.01.012c-.02.01-.03.02-.04.03l-.35.287-.45.363-.05.042c-9.35 7.57-29.89 24.21-74.559 43.848-.833.367-1.774.776-2.81 1.225l-.006.003c-8.449 3.671-23.176 10.07-36.784 18.612-3.473 3.473-5.218 8.394-5.104 13.337-.166-4.949 1.574-9.898 5.094-13.377-4.13 2.57-8.12 5.36-11.86 8.25v.01c-2.2 1.7-6.18 5.74-8.16 7.92-17.09 18.87-21.48 40.58-30.1 113.87-2.495 21.166-8.287 39.506-14.726 59.891-2.361 7.477-4.81 15.23-7.214 23.499-.221.766-.721 1.373-1.234 1.995-.88 1.069-1.798 2.184-1.406 4.225l.003.003.011.033.013.041c.176.544 1.145 3.541 1.363 5.993.243 2.792-1.388 7.194-3.807 13.72l-.203.55c-.38 1.01-.58 2.08.01 2.98.805 1.26 6.244 3.944 8.08 4.85.306.151.512.253.58.29 16.75 9.31 65.83 25.41 94.27 26.11 1.839.051 2.252-1.145 2.523-1.927l.032-.093.043-.12.014-.038.014-.035.024-.057c.374-.879.757-1.806 1.146-2.746 1.74-4.206 3.594-8.688 5.294-10.404 1.249-1.278 3.782-4.318 3.942-4.511l.008.001c1.329-1.149 1.704-3.55 1.992-5.389.128-.818.238-1.524.408-1.961 1.419-3.644 2.589-6.246 3.759-8.848v-.003l.01-.002a248.69 248.69 0 0 0 2.29-5.222c.06.809.11 1.621.16 2.435.85 6.8 1.64 13.78 2.34 20.92.01.012.01.024.01.037V346.69c2 10.13 1.88 20.983 1.75 32.616V379.356c-.03 2.889-.06 5.827-.06 8.814 0 0 3.12 51.74 1.02 77.3.12 7.622-.01 14.771-.15 21.893V487.372c-.16 8.618-.33 17.195-.03 26.518.31 18.729-1.14 36.552-2.46 52.805-.44 5.407-.87 10.64-1.21 15.675-.7 10.331-2.05 19.559-3.63 30.273-1.49 10.193-3.18 21.732-4.699 36.847-1.866 18.544-2.313 28.322-2.869 40.492-.589 12.873-1.299 28.424-3.941 59.858-.44 5.3-.99 10.57-1.81 15.78-.275 1.77-.4 3.531-.489 5.28h-.061l.039.028.02.014c-.028.541-.052 1.082-.075 1.621-.163 3.667-.323 7.282-1.534 10.837-.03.088-.063.179-.098.275l-.137.367c-.739 1.976-1.967 5.254.735 8.188 1.69 1.84 5.39 3.24 10.08 4.32 3.239.74 6.939 1.33 10.779 1.8 3.84.46 7.81.8 11.58 1.06 7.83.891 17.56.063 28.99-.909 13.46-1.145 29.26-2.488 47.04-1.461 6.75.39 13.79.823 21.1 1.271l.09.006.05.003c21.08 1.295 44.38 2.726 69.41 3.69h.06c25.03-.964 48.33-2.395 69.41-3.69l.06-.003.1-.006c7.3-.449 14.33-.881 21.08-1.271 17.78-1.027 33.58.316 47.04 1.461 11.43.972 21.16 1.8 28.99.909 3.77-.26 7.74-.6 11.58-1.06 3.84-.47 7.54-1.06 10.78-1.8 4.69-1.08 8.39-2.48 10.08-4.32 2.7-2.934 1.47-6.212.73-8.188ZM1095.9 13.69c.01.006.01.01.02.01-.01-.003-.01-.007-.02-.01Zm205.98 12.25c.04.032.07.064.1.094l.02.016.01.01.01.002c.08.072.15.14.23.218l-.01.007c-.08-.075-.15-.143-.23-.213-.05-.04-.09-.081-.14-.124l.01-.01Zm-208.16 17.199 4.57-3.282v.002l-4.57 3.28Zm183.87-3.297v.004l11.71 8.403-11.71-8.407Zm159.52 293.368-.66.194c21.34-6.355 40.04-14.064 49.53-19.69-8.39 5.028-26.5 12.87-48.87 19.496ZM1273.55 41.97h.01v-.001l.01-.003c.01-.002.01-.005.02-.009.01-.006.03-.013.04-.017v-.01c-.02.008-.06.023-.08.04ZM938.899 333.239c-20.201-6.051-37.975-13.294-47.712-18.795 8.858 5.035 26.296 12.453 47.614 18.766l.098.029Z"
        fill={fill}
        style={{
          mixBlendMode: "multiply",
        }}
      />
      <path
        d="M289 12h4.5l2.5 2 3 2.5 4.5 2.5 4 2.5L315 25l7 3 6.5 2 6 1.5 8 2 8 1.5 8 1 8 1 12 1h17l8-.5 7-.5 8.5-1 9-1.5 7.5-1.5 8-2 9-3 5.5-2 5.5-2.5 5-2.5 6.5-4 4-3 2.5-2 1.5-1h2l1 1 .5.5 4 4 5.5 5 8 6.5 7 5.5 10.5 7.5 8 5 5 3 5 3 4.5 2.5 4 2 5.5 3 7 3.5 5.5 2.5c-140.142 161.325-218.321 166.968-357 0l18.5-9 16-9L252 42l6-4 4-3 4-3 5-4 5.5-4.5L282 19l3-3 2-2 2-2Z"
        fill={fill}
      />
    </svg>

     );
}
 
export default Base;