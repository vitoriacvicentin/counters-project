import { StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function useSafeAreaStyles(initialValue = { top: 0, bottom: 0, left: 0, right: 0 }) {
   let valueSAInsets = useSafeAreaInsets();
   let safeArea = Object.assign({}, valueSAInsets);
   try {
      if (typeof initialValue === 'object') {
         if (typeof initialValue?.top === 'number') {
            if (typeof safeArea?.top === 'number')
               safeArea.top += initialValue.top;
            else safeArea.top = initialValue.top;
         }
         if (typeof initialValue?.bottom === 'number') {
            if (typeof safeArea?.bottom === 'number')
               safeArea.bottom += initialValue.bottom;
            else safeArea.bottom = initialValue.bottom;
         }
         if (typeof initialValue?.left === 'number') {
            if (typeof safeArea?.left === 'number')
               safeArea.left += initialValue.left;
            else safeArea.left = initialValue.left;
         }
         if (typeof initialValue?.right === 'number') {
            if (typeof safeArea?.right === 'number')
               safeArea.right += initialValue.right;
            else safeArea.right = initialValue.right;
         }
      }
   } catch (error) {
      //anything
      console.log(error)
   }
   return StyleSheet.create({
      container: {
         paddingTop: safeArea.top,
         paddingLeft: safeArea.left,
         paddingRight: safeArea.right,
         paddingBottom: safeArea.bottom,
      },
      header: {
         paddingTop: safeArea.top,
         paddingLeft: safeArea.left,
         paddingRight: safeArea.right,
      },
      footer: {
         paddingLeft: safeArea.left,
         paddingRight: safeArea.right,
         paddingBottom: safeArea.bottom,
      },
      topBottom: {
         paddingTop: safeArea.top,
         paddingBottom: safeArea.bottom,
      },
      leftRight: {
         paddingLeft: safeArea.left,
         paddingRight: safeArea.right,
      },
      top: { paddingTop: safeArea.top, },
      bottom: { paddingBottom: safeArea.bottom, },
      left: { paddingLeft: safeArea.left, },
      right: { paddingRight: safeArea.right, },

      mContainer: {
         marginTop: safeArea.top,
         marginLeft: safeArea.left,
         marginRight: safeArea.right,
         marginBottom: safeArea.bottom,
      },
      mHeader: {
         marginTop: safeArea.top,
         marginLeft: safeArea.left,
         marginRight: safeArea.right,
      },
      mFooter: {
         marginLeft: safeArea.left,
         marginRight: safeArea.right,
         marginBottom: safeArea.bottom,
      },
      mTopBottom: {
         marginTop: safeArea.top,
         marginBottom: safeArea.bottom,
      },
      mLeftRight: {
         marginLeft: safeArea.left,
         marginRight: safeArea.right,
      },
      mTop: { marginTop: safeArea.top, },
      mBottom: { marginBottom: safeArea.bottom, },
      mLeft: { marginLeft: safeArea.left, },
      mRight: { marginRight: safeArea.right, },

      absoluteContainer: {
         position: 'absolute',
         top: safeArea.top,
         left: safeArea.left,
         right: safeArea.right,
         bottom: safeArea.bottom,
      },
      absoluteHeader: {
         position: 'absolute',
         top: safeArea.top,
         left: safeArea.left,
         right: safeArea.right,
      },
      absoluteFooter: {
         position: 'absolute',
         left: safeArea.left,
         right: safeArea.right,
         bottom: safeArea.bottom,
      },
      absoluteTopBottom: {
         position: 'absolute',
         top: safeArea.top,
         bottom: safeArea.bottom,
      },
      absoluteLeftRight: {
         position: 'absolute',
         left: safeArea.left,
         right: safeArea.right,
      },
      absoluteTop: {
         position: 'absolute',
         top: safeArea.top,
      },
      absoluteBottom: {
         position: 'absolute',
         bottom: safeArea.bottom,
      },
      absoluteLeft: {
         position: 'absolute',
         left: safeArea.left,
      },
      absoluteRight: {
         position: 'absolute',
         right: safeArea.right,
      },
   })
}
