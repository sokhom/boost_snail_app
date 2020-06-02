import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation'



export interface NavProps  {
    navigation: NavigationScreenProp<NavigationState,NavigationParams>
}

export interface BaseProps {
    navigation: NavigationScreenProp<NavigationState,NavigationParams>,
    actionMenu?: () => void
} 