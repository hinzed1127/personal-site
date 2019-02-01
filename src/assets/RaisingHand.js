import React from 'react';
import { colors } from '../utils/theme';
// preserveAspectRatio="xMinYMin meet"


export default (props) => (
  <svg
    viewBox="0 0 200 490"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <g fill="none" fillRule="evenodd">
      <ellipse fill={colors['beige']} cx="115" cy="79.5" rx="45" ry="53.5" />
      <path fill={colors['beige']} d="M90 175h55v133H90z" />
      <path
        d="M118.769 34.423c3.31.525 6.532 1.338 9.656 2.533 3.785 1.724 7.314 3.882 10.647 6.35 3.061 2.44 5.841 5.089 8.323 8.108a59.536 59.536 0 0 1 3.71 5.483c1.227 2.068 2.249 4.252 3.223 6.446 2.96 7.14 5.302 14.586 6.466 22.223.36 3.197.417 6.336.087 9.528-.53 3.063-1.422 5.981-2.565 8.877a48.18 48.18 0 0 1-5.32 8.984c-2.906 3.554-6.163 6.73-9.72 9.659-6.512 4.821-13.122 9.65-20.573 12.96-2.477.95-4.972 1.677-7.588 2.127-1.905.154-3.78.14-5.672-.04a33.543 33.543 0 0 1-5.488-1.5 38.044 38.044 0 0 1-6.215-3.646c-2.96-2.437-5.578-5.183-7.986-8.151-3.627-4.801-6.953-9.896-9.445-15.366-1.085-2.77-1.88-5.584-2.627-8.458-.383-1.477-.607-2.997-.864-4.506a170.383 170.383 0 0 1-.616-6.205c-.087-1.151-.163-2.295-.225-3.446-.082-1.483-.192-2.97-.228-4.455.402-.19.779-.448 1.112-.778 1.527-1.51 1.6-4.072.102-5.624.289-.772.601-1.538.919-2.304.375-.806.755-1.602 1.174-2.39.878-1.654 1.205-3.43.694-5.262a6.877 6.877 0 0 0-3.17-4.076c-1.919-1.111-4.118-1.173-6.015-.416a27.117 27.117 0 0 1 1.261-4.353 36.869 36.869 0 0 1 3.855-6.509c1.878-2.252 3.976-4.25 6.272-6.08 3.541-2.544 7.346-4.591 11.344-6.326 4.06-1.594 8.21-2.766 12.519-3.445 4.32-.469 8.638-.415 12.953.058m-9.77-12.26c-8.827.616-17.168 3.607-24.873 7.8-5.336 2.906-10.288 6.762-14.235 11.358a38.193 38.193 0 0 0-5.494 8.41c-1.521 3.195-2.62 6.58-2.94 10.112-.26 2.805.036 5.555.653 8.305.259 1.167.64 2.3 1.078 3.412-.263.608-.519 1.218-.771 1.83-.935 2.276-1.267 4.753-1.39 7.185-.117 2.407.17 4.844.343 7.24.112 1.55.3 3.094.455 4.632.367 3.663 1.04 7.276 1.792 10.873.295 1.413.785 2.8 1.184 4.189 1.133 3.915 2.858 7.709 4.748 11.316 1.215 2.326 2.66 4.51 4.146 6.67 1.624 2.361 3.277 4.668 5.05 6.924 2.485 3.168 5.192 6.085 8.25 8.718 1.649 1.428 3.436 2.72 5.254 3.93 2.047 1.357 4.269 2.372 6.54 3.31 4.044 1.67 8.301 2.453 12.672 2.61 2.39.09 4.789-.279 7.138-.647 2.486-.394 4.885-1.206 7.214-2.12 4.12-1.614 7.99-3.662 11.727-6.008 1.84-1.156 3.61-2.412 5.397-3.649 2.558-1.77 5.03-3.642 7.515-5.509 6.618-4.96 12.458-11.212 16.691-18.29 2.124-3.542 3.707-7.493 4.977-11.403.598-1.841.972-3.744 1.262-5.656.393-2.522.618-5.036.618-7.583 0-2.03-.26-4.062-.53-6.07-.303-2.256-.654-4.49-1.13-6.721-.919-4.289-2.245-8.476-3.712-12.608a104.515 104.515 0 0 0-4.937-11.64c-1.99-3.997-4.646-7.565-7.464-11.016-2.497-3.057-5.458-5.66-8.593-8.057-3.645-2.79-7.434-5.247-11.584-7.245C129.081 23.41 121.316 22 113.593 22c-1.536 0-3.068.056-4.593.163M144.118 272.491l-.098.738.098-.738m5.351-94.269c.092.108.178.22.26.336-.086-.112-.172-.224-.26-.336m0-.906c.108.074.213.155.314.242-.106-.08-.21-.162-.314-.242M92.74 173.82c4.334.666 8.612 1.665 12.956 2.293 5.16.743 10.323 1.477 15.528 1.918 4.348.37 8.69.6 13.057.4 2.406-.108 4.808-.234 7.214-.4 2.443-.173 4.899-.485 7.348-.343.197.036.394.076.591.122.152.24.294.48.429.724.46 1.357.788 2.713 1.04 4.114.837 7.045.125 14.162-.468 21.196-.27 3.228-.586 6.447-.888 9.671-.295 3.224-.455 6.466-.671 9.699-.823 12.352-.923 24.74-2.452 37.05a645.556 645.556 0 0 1-1.616 12.05c-.869 5.548-1.756 11.093-2.791 16.62-.482 2.55-1.043 5.081-1.595 7.618-.351 1.616-.564 3.258-.933 4.866-1.71.021-3.415-.062-5.133-.143-3.114-.144-6.152.01-9.236.368-3.32.385-6.634.79-9.963 1.077-3.063.265-6.132.433-9.205.475-2.165.028-4.356.117-6.535.115-.305-3.36-.306-6.752-.314-10.116-.005-3.526-.015-7.057-.02-10.583-.01-3.344-.116-6.693-.17-10.037-.04-2.565-.061-5.13-.175-7.688-.192-4.084-.377-8.166-.563-12.25-.145-3.19-.451-6.387-.686-9.574-.466-6.34-.928-12.671-1.218-19.022-.326-7.296-.397-14.608-.833-21.901-.23-3.819-.456-7.637-.682-11.46-.162-2.757-.16-5.531-.345-8.289.297-1.027.303-2.124-.086-3.18-.131-.362-.266-.729-.4-1.091-.75-2.056-2.311-3.7-4.394-4.429a35.536 35.536 0 0 1 3.209.13m-4.249-12.81c-2.865.059-5.745.472-8.57.89-1.626.242-3.212 1.592-4.006 2.85a5.822 5.822 0 0 0-.677 4.777c.461 1.55 1.58 2.891 3.08 3.704l1.603.626a7.34 7.34 0 0 0 3.543.005c-1.657.841-2.957 2.27-3.448 4.01-.958 3.397-.558 7.056-.331 10.519.195 3.072.416 6.144.632 9.217.476 6.754.792 13.513 1.05 20.275.25 6.512.681 13.01 1.198 19.51.466 5.843.998 11.687 1.285 17.54.18 3.782.366 7.561.552 11.34.16 3.336.12 6.687.185 10.025.11 5.997.066 11.994.166 17.992.036 1.8.065 3.606.095 5.406.03 1.797.207 3.593.447 5.376.337 2.479.713 4.934 2.334 7.018.372.44.738.881 1.11 1.322a12.25 12.25 0 0 0 2.232 1.477c1.295.724 2.911.919 4.38 1.026.954.07 1.893.092 2.852.083 1.75-.01 3.503-.069 5.254-.115 6.995-.187 13.885-.92 20.806-1.858 1.063-.141 2.124-.285 3.186-.43 2.98-.28 5.932-.283 8.924-.242 1.375.018 2.74-.014 4.105-.117 2.785-.2 5.757-.7 7.879-2.515.808-.692 1.5-1.407 1.953-2.345.39-.811.727-1.573.988-2.413.18-.599.336-1.202.471-1.81.302-1.333.442-2.697.679-4.043.516-2.976 1.314-5.913 1.896-8.88.637-3.276 1.2-6.568 1.756-9.858 1.14-6.75 2.098-13.526 2.946-20.307.803-6.434 1.276-12.886 1.632-19.351.331-5.97.497-11.948.887-17.913.221-3.314.363-6.638.668-9.947.29-3.198.607-6.397.874-9.594.587-7.013 1.264-14.045.651-21.078-.366-4.187-1.124-8.559-3.562-12.18-1.205-1.782-2.972-3.276-4.958-4.27-2.038-1.02-4.327-1.356-6.59-1.592-1.992-.21-3.98-.093-5.977-.014-1.73.07-3.457.153-5.19.228-4.094.18-8.158.19-12.254.027-3.753-.147-7.506-.61-11.242-1.02a456.45 456.45 0 0 1-11.472-1.713c-2.083-.34-4.145-.78-6.232-1.082-2.336-.333-4.636-.566-6.99-.566-.265 0-.531.002-.8.01"
        fill={colors['gray']}
      />
      <path
        d="M85.898 469.67v.006a1.757 1.757 0 0 1-.565.143c.188-.047.377-.098.565-.149m2.607-154.289c-1.945 7.814-3.336 15.775-4.024 23.834l-.663 7.759c-.096 1.12-.236 2.25-.251 3.376-.08 4.738-.156 9.469-.235 14.2-.016 1.114-.111 2.26-.052 3.376.081 1.64.166 3.284.247 4.924.226 4.415.451 8.83.673 13.251.196 3.804.582 7.61.869 11.402.25 3.221.461 6.437.643 9.662.16 2.824.402 5.652.477 8.482.08 3.29.166 6.58.25 9.865.137 5.348-.124 10.743-.356 16.086-.245 5.684-.607 11.402-.451 17.093.103 3.786.342 7.57.563 11.351-.356.062-.712.124-1.067.188a4.271 4.271 0 0 1-.837-.11 6.931 6.931 0 0 0-3.678 1.06c-1.632 1.02-2.852 2.707-3.355 4.653-.517 2.01-.25 4.196.738 5.995 1.015 1.855 2.512 2.856 4.356 3.575 3.144 1.226 6.485.3 9.639-.435a16.703 16.703 0 0 0 4.69-1.87c1.207-.707 2.598-2.293 3.286-3.552.889-1.619 1.226-3.74 1.075-5.583-.27-3.253-.366-6.521-.553-9.78-.2-3.462-.39-6.906-.285-10.38.11-3.626.235-7.26.366-10.887.262-7.341.332-14.66.066-22.001a457.209 457.209 0 0 0-1.282-21.15c-.422-4.983-.939-9.967-1.22-14.96-.19-3.355-.377-6.715-.567-10.068-.126-2.273-.412-4.599-.387-6.876.07-5.835.14-11.67.216-17.511.02-1.95.286-3.917.442-5.856.22-2.66.437-5.317.656-7.981.405-2.642.806-5.285 1.207-7.929.182-1.172.477-2.33.733-3.488.427-1.945.854-3.885 1.336-5.813.96-3.863-1.17-7.958-4.807-9.03a6.278 6.278 0 0 0-1.768-.253c-3.016 0-5.888 2.15-6.69 5.381M150.5 469.485l.076.1-.076-.1M137.099 314.17c-.111 7.535-.176 15.091.07 22.626.138 4.056.269 8.105.406 12.154.035 1.02.176 2.053.267 3.075.223 2.563.444 5.132.666 7.696.228 2.59.415 5.186.723 7.765l1.667 13.816c.843 7.009 1.693 14.018 2.541 21.028.809 6.685 1.354 13.392 1.945 20.099.101 1.131.112 2.272.162 3.403l.332 7.322c.148 3.247.092 6.503.108 9.756.04 6.556-.37 13.117-.435 19.672-.036 3.763-.323 7.749 1.096 11.308.596 1.481 1.293 2.846 1.97 4.279.247.516.496 1.021.753 1.527.358.703 1.026 1.641 1.505 2.141a6.159 6.159 0 0 0 2.712 1.627c.784.36 1.613.541 2.48.536 2.896-.005 5.75-.854 8.563-1.49 1.17-.262 2.355-.449 3.54-.633.689-.074 1.377-.15 2.067-.226 1.415-.158 2.835-.189 4.244-.46 1.511-.292 2.834-.87 4.188-1.631 3.243-1.824 4.253-6.353 2.43-9.568-.885-1.564-2.354-2.73-4.052-3.215-1.814-.513-3.54-.172-5.186.69-1.544.412-3.136.585-4.71.884a97.278 97.278 0 0 0-3.243.678c-2.031.459-4.016 1.096-6.017 1.663a61.988 61.988 0 0 0-.806-1.116c.255.343.514.684.771 1.031-.362-.5-.67-1.011-.948-1.55a10.865 10.865 0 0 1-.199-.703c-.122-2.837.266-5.738.45-8.56.222-3.46.41-6.916.575-10.376.329-6.863.233-13.736-.07-20.595-.131-3.028-.253-6.045-.52-9.062-.348-4.013-.703-8.02-1.056-12.028-.302-3.44-.833-6.868-1.248-10.293l-1.12-9.213-2.471-20.402c-.687-5.69-1.057-11.428-1.556-17.14-.177-2.027-.232-4.054-.298-6.092-.12-3.596-.242-7.196-.364-10.798-.09-2.637-.02-5.283-.026-7.926-.004-3.898-.009-7.797.052-11.699.045-3.362-2.758-6.17-5.981-6.17-3.294 0-5.93 2.808-5.977 6.17M153.181 176.2c-2.986.82-4.812 4.008-3.98 6.991 3.935 14.128 7.954 28.237 11.965 42.345 3.162 11.116 6.324 22.236 9.314 33.402 3.3 12.304 6.723 24.591 9.625 36.995 1.406 6.005 2.808 12.006 4.11 18.027a387 387 0 0 1 1.87 8.992c.132.69.238 1.383.339 2.073.222 1.504.716 2.851 1.796 3.973 1.275 1.318 2.874 1.851 4.665 1.987 1.503.11 2.733-.392 4.064-1a6.147 6.147 0 0 0 2.195-2.194c.554-.95.837-1.981.837-3.084a6.391 6.391 0 0 0-.201-2.156c-.278-.75-.606-1.48-.98-2.19-.452-.91-1.159-1.62-1.997-2.117a411.975 411.975 0 0 0-.791-3.722c-.727-3.335-1.458-6.663-2.194-9.989a636.337 636.337 0 0 0-4.121-17.331c-3.077-12.238-6.25-24.456-9.648-36.607-6.577-23.484-13.305-46.928-19.852-70.427-.695-2.493-3.035-4.168-5.536-4.168-.49 0-.988.064-1.48.2M7.492.146L7.386.13c.062.01.124.017.185.025L7.453.15a.398.398 0 0 1 .04-.005m-.858.022c-.994.073-1.957.35-2.95.865C2.055 1.876.76 3.625.296 5.385-.334 7.75.14 10.24.8 12.55c.912 3.218 2.007 6.379 3.092 9.54 1.986 5.769 4.114 11.522 6.444 17.164 2.678 6.483 5.296 12.987 8.175 19.382 2.714 6.034 5.306 12.14 8.2 18.09a5985.506 5985.506 0 0 0 19.768 40.382 1302.339 1302.339 0 0 1 7.429 15.212c3.807 7.932 7.73 15.817 11.372 23.824 1.31 2.885 2.657 5.739 4.22 8.497 1.508 2.646 3.395 5.092 5.27 7.481 1.963 2.507 5.251 4.478 8.513 3.711 1.685-.397 2.976-1.3 4.196-2.5 1.256-1.23 1.7-2.99 2.29-4.583.499-1.352.136-3.116-.565-4.322a5.658 5.658 0 0 0-3.349-2.571 5.634 5.634 0 0 0-4.32.565c-.019.01-.037.02-.055.032a62.472 62.472 0 0 1-1.731-2.594c-1.116-1.78-2.043-3.67-2.956-5.556-1.563-3.221-2.98-6.514-4.518-9.746-1.468-3.092-2.941-6.182-4.408-9.268-2.729-5.732-5.411-11.48-8.195-17.183-6.545-13.412-13.071-26.829-19.486-40.302-1.916-4.023-3.853-8.027-5.638-12.111-2.389-5.463-4.772-10.93-7.168-16.393-1.496-3.796-2.996-7.587-4.491-11.378-1.317-3.333-2.502-6.702-3.707-10.07a164.661 164.661 0 0 1-3.127-9.646c-.86-2.95-1.697-5.902-2.292-8.915 1.062-1.833.857-4.378-.179-6.14a6.388 6.388 0 0 0-2.28-2.284C10.797.656 10.292.44 9.782.226A6.439 6.439 0 0 0 6.635.168"
        fill={colors['gray']}
      />
    </g>
  </svg>
);
