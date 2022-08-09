import { SVGProps } from 'react'

import { useTheme } from 'styled-components'

export function Logo(props: SVGProps<SVGSVGElement>) {
  const { colors } = useTheme()
  return (
    <svg width={85} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M24.218 4.102c-.325-.496-.799-.51-1.338-.527l-.186-.006c-.048-.002-.1-.001-.156 0-.219.003-.475.007-.604-.177-.15-.213-.136-.625-.124-.966.004-.107.007-.208.005-.292-.02-.79-.065-1.63-.37-1.911-.23-.21-.918-.182-1.553-.155a14.39 14.39 0 0 1-.583.018H5.796c-.272 0-.557-.023-.838-.044-.546-.043-1.073-.084-1.447.044-.543.185-.58 1.16-.615 2.08l-.002.049c-.029.758-.217 1.343-.84 1.284C1.33 3.432.61 3.41.283 4.066c-.387.776-.307 1.588-.164 3.042l.064.664h24.244l.044-.51c.113-1.308.212-2.448-.252-3.16Z"
        fill="#8047F8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.07 9.215c.379 5.124.753 10.255 1.128 15.386v.003l.61 8.357h.774c.053.436.113.974.177 1.541.129 1.152.271 2.424.391 3.206h.086c.788-.288 6.235-2.616 6.238-11.886a.564.564 0 0 1 .002-.08H10.13a.3.3 0 0 1-.284-.218 6.745 6.745 0 0 1-.317-.998 4.3 4.3 0 0 0-1.796 1.951 3.848 3.848 0 0 1-.132-2.65 3.895 3.895 0 0 1 1.619-2.118 10.985 10.985 0 0 1 2.846-7.329l.029-.025a.297.297 0 0 1 .19-.072.298.298 0 0 1 .218.097 10.744 10.744 0 0 1 2.82 7.373 3.792 3.792 0 0 1 1.646 2.108c.272.876.214 1.82-.165 2.657a4.264 4.264 0 0 0-1.796-1.95c-.049.329-.138.651-.266.959-.044.131-.133.216-.222.216h-1.435a.536.536 0 0 1 .005.047v.011a.56.56 0 0 1 0 .041c.02 9.536 5.812 11.7 6.3 11.866h.167c.043-.75.182-1.787.317-2.798.093-.696.185-1.38.242-1.95h.782c.251-3.507.509-7.005.766-10.504v-.002c.33-4.475.66-8.95.974-13.445H2.12c-.06.011-.055.108-.05.206Zm10.216 5.068h-.002.003-.001Z"
        fill="#8047F8"
      />
      <path
        d="M31.309 5.698c0-1.265.436-2.245 1.307-2.941.888-.712 2.219-1.067 3.994-1.067 1.173 0 2.171.11 2.995.332v3.273a9.066 9.066 0 0 0-2.638-.403c-.856 0-1.411.103-1.664.308-.254.19-.38.474-.38.854v7.97c0 .759.593 1.138 1.782 1.138 1.204 0 2.195-.118 2.971-.355v3.202c-.855.237-1.893.356-3.114.356-1.775 0-3.098-.348-3.97-1.044-.855-.696-1.283-1.676-1.283-2.941V5.698ZM46.62 7.952c0-.601-.332-.902-.998-.902-.666 0-.998.3-.998.902v6.594c0 .6.332.901.998.901.666 0 .998-.3.998-.901V7.952Zm-5.515-.119c0-1.202.373-2.135 1.118-2.799.76-.68 1.894-1.02 3.4-1.02 1.505 0 2.63.34 3.375 1.02.76.664 1.14 1.597 1.14 2.799v6.831c0 1.202-.38 2.143-1.14 2.823-.745.664-1.87.996-3.376.996-1.505 0-2.639-.332-3.4-.996-.744-.68-1.117-1.62-1.117-2.823V7.833ZM52.45 4.085c0-2.672 1.41-4.008 4.23-4.008.365 0 .8.04 1.308.118v2.752a5.782 5.782 0 0 0-.713-.048c-.808 0-1.212.38-1.212 1.139v.213h1.925v2.8h-1.925v11.195h-3.614V7.05h-1.355V4.251h1.355v-.166ZM59.46 4.085c0-2.672 1.41-4.008 4.231-4.008.365 0 .8.04 1.308.118v2.752a5.78 5.78 0 0 0-.713-.048c-.809 0-1.213.38-1.213 1.139v.213H65v2.8h-1.926v11.195H59.46V7.05h-1.355V4.251h1.355v-.166ZM65.83 14.261V7.833c0-1.202.371-2.135 1.116-2.799.745-.68 1.87-1.02 3.376-1.02 2.9 0 4.35 1.273 4.35 3.819v4.815h-5.396v1.328c0 .475.127.815.38 1.02.27.19.848.285 1.736.285.903 0 1.886-.158 2.947-.474v3.13c-1.109.301-2.297.451-3.565.451-3.297 0-4.945-1.376-4.945-4.127Zm3.446-4.34h2.092V7.88c0-.601-.349-.902-1.046-.902-.697 0-1.046.3-1.046.901v2.04ZM76.09 14.261V7.833c0-1.202.372-2.135 1.117-2.799.745-.68 1.87-1.02 3.376-1.02 2.9 0 4.35 1.273 4.35 3.819v4.815h-5.396v1.328c0 .475.127.815.38 1.02.27.19.848.285 1.736.285.903 0 1.885-.158 2.947-.474v3.13c-1.109.301-2.298.451-3.566.451-3.296 0-4.944-1.376-4.944-4.127Zm3.447-4.34h2.092V7.88c0-.601-.349-.902-1.046-.902-.697 0-1.046.3-1.046.901v2.04ZM37.03 26.98c0-1.168-.617-1.752-1.852-1.752h-1.97v10.646h1.97c1.235 0 1.853-.597 1.853-1.79V26.98Zm-5.207-2.959h3.432c1.04 0 1.828.266 2.36.798.534.532.8 1.246.8 2.141v7.162c0 .922-.26 1.648-.78 2.18-.52.532-1.3.798-2.34.798h-3.472V24.021ZM40.694 34.278v-5.41c0-.922.26-1.655.78-2.2.534-.558 1.334-.837 2.4-.837 1.066 0 1.853.28 2.36.837.52.545.78 1.278.78 2.2v3.386H42.06v1.966c0 .584.182 1.018.546 1.304.364.285.93.428 1.697.428s1.56-.117 2.38-.35v1.284c-.65.208-1.424.311-2.322.311-2.444 0-3.667-.973-3.667-2.919Zm1.366-3.172h3.628v-2.239c0-1.22-.605-1.829-1.814-1.829-1.21 0-1.814.61-1.814 1.83v2.238ZM49.385 23.087h1.385V37.1h-1.385V23.087ZM54.144 24.78c-.56 0-.839-.298-.839-.895s.28-.895.839-.895c.572 0 .858.298.858.895s-.286.895-.858.895Zm-.683 1.324h1.385V37.1h-1.385V26.104ZM61.985 26.026h1.404L60.93 37.1h-1.95l-2.458-11.074h1.424l1.073 5.08.955 5.021c.39-2.154 1.06-5.52 2.01-10.101ZM64.866 34.278v-5.41c0-.922.26-1.655.78-2.2.534-.558 1.333-.837 2.4-.837 1.066 0 1.853.28 2.36.837.52.545.78 1.278.78 2.2v3.386h-4.954v1.966c0 .584.182 1.018.546 1.304.364.285.93.428 1.697.428s1.56-.117 2.38-.35v1.284c-.65.208-1.425.311-2.322.311-2.444 0-3.667-.973-3.667-2.919Zm1.366-3.172h3.628v-2.239c0-1.22-.605-1.829-1.814-1.829-1.21 0-1.814.61-1.814 1.83v2.238ZM77.146 25.968h.487v1.323h-.663c-.468 0-.89.123-1.268.37a53.1 53.1 0 0 0-.76.525V37.1h-1.385V26.026h1.326v.837c.04-.026.137-.097.293-.214a8.462 8.462 0 0 1 .546-.35c.143-.078.247-.124.312-.137.078-.026.182-.058.312-.097.195-.065.462-.097.8-.097ZM83.567 26.026h1.385L81.909 40h-1.326l.604-2.9h-.683l-2.418-11.074h1.404l1.17 5.508.859 4.593c.26-1.531.546-3.062.858-4.593l1.19-5.508Z"
        fill={colors['base-subtitle']}
      />
    </svg>
  )
}
