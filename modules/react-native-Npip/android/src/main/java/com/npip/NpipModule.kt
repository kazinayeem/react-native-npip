package com.reactnativenpip

import android.app.Activity
import android.app.PictureInPictureParams
import android.os.Build
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class PiPModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    // This name will be used to call the module from JavaScript
    override fun getName(): String {
        return "PiPModule"
    }

    @ReactMethod
    fun enterPiPMode(promise: Promise) {
        val activity: Activity? = currentActivity
        if (activity == null) {
            promise.reject("ACTIVITY_NULL", "Activity is null")
            return
        }

        // Ensure the device runs Android O or higher
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val pipParams = PictureInPictureParams.Builder().build()
            activity.enterPictureInPictureMode(pipParams)
            promise.resolve("PiP mode entered successfully")
        } else {
            promise.reject("UNSUPPORTED_VERSION", "Picture-in-Picture is not supported on this device")
        }
    }
}
