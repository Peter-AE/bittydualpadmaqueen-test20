// The MIT License (MIT)
// 
// This software is provided by Bitty Software - https://www.bittysoftware.com
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the "Software"),
// to deal in the Software without restriction, including without limitation
// the rights to use, copy, modify, merge, publish, distribute, sublicense,
// and/or sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
// THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
// DEALINGS IN THE SOFTWARE.
// 
// BittyDualPad_Maqueen-Test
// 
// Android Bitty Controller App to control DFROBOT Maqueen
// via Dual Touch Pad.
// 
// Left Hand     Right Hand
// A               1
// C    D          3    4
// D                2
// 
// Touch Pad A - D: No functions
// 
// Touch Pad 1 - 4:
// 1 Move forward at Speed 100
// 2 Move backward at speed 100
// 3 Turn left at speed 100
// 4 Turn right at speed 100
// 
// Project Settings:
// No Pairing Required: Anyone can connect via Bluetooth.
// 
// Extensions:
// Maqueen
// Bluetooth
bluetooth.onBluetoothConnected(function () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.clearScreen()
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showString("D")
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
    	
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
    	
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
    	
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
    	
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
    	
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
    	
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
    	
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
    	
    }
})
basic.showString("BC-DP")
maqueen.motorStop(maqueen.Motors.All)
