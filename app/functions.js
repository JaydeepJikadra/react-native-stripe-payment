import Toast from 'react-native-root-toast';
import NetInfo from '@react-native-community/netinfo';

NetInfo.configure({
  reachabilityUrl: 'https://www.google.co/',
  reachabilityTest: async (response) => response.status === 200,
  reachabilityLongTimeout: 60 * 1000, // 60s
  reachabilityShortTimeout: 5 * 1000, // 5s
  reachabilityRequestTimeout: 15 * 1000, // 15s
});

export async function checkInternetConnection() {
  const {isConnected} = await NetInfo.fetch();
  console.log(
    'TCL: checkInternetConnection -> isInternetReachable',
    isConnected,
  );
  return isConnected;
}
export function showToast(obj: Object) {
  Toast.show(obj.message, {
    duration: Toast.durations.LONG,
    position: obj.position
      ? obj.position === 'Center'
        ? Toast.positions.CENTER
        : obj.position === 'Top'
        ? Toast.positions.TOP
        : Toast.positions.BOTTOM
      : Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
      // calls on toast\`s appear animation start
    },
    onShown: () => {
      // calls on toast\`s appear animation end.
    },
    onHide: () => {
      // calls on toast\`s hide animation start.
    },
    onHidden: () => {
      // calls on toast\`s hide animation end.
    },
  });
}
