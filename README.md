#

![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# Micro:bit Radio Communication

### A simple radio communication experiment using 2 Micro:bit boards, which can transmit & receive command each other. Watch the video below ([click here](https://www.youtube.com/watch?v=NJdfJ0-24Ks)) to see its action, then follow the instructions to build your own!

[![Video Microbit Radio](https://img.youtube.com/vi/NJdfJ0-24Ks/0.jpg)](https://www.youtube.com/watch?v=NJdfJ0-24Ks)

#

### **1. What You Need** :gift:
To build this project, you need the following items:
- 2 pcs Micro:bit board
- 2 pcs micro USB cable
- a PC/laptop with any OS

#

### **2. Step by Step** :clipboard:
 
- First, open __*Microsoft Makecode for Micro:bit*__ site (https://makecode.microbit.org/) to create commands for Micro:bit. You can write the code using __Javascript__ or simply choose __Blocks__ menu.

  - If you choose __Javascript__, write the lines below:

    ```javascript
    input.onButtonPressed(Button.A, () => {
        radio.sendString("A A A")
    })
    
    input.onButtonPressed(Button.B, () => {
        radio.sendString("B B B")
    })

    radio.onDataPacketReceived(
        ({ receivedString }) => {
            basic.showString(receivedString)
        }
    )

    for (let i = 0; i < 5; i++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.Target)
        basic.pause(100)
    }
    
    basic.pause(500)
    radio.setGroup(43)
    basic.showIcon(IconNames.Heart)
    basic.forever(() => {})
    ```

  - If using __Blocks__, arrange the code like the following picture:

      ![blocks](https://raw.githubusercontent.com/LintangWisesa/Microbit_Radio_Communication/master/Blocks.png)

- After that, click __Download__ button to get a __.hex__ file for your Micro:bit board. Simply connect your Micro:bit to your PC/laptop, then paste the __.hex__ file into it.

- __Done!__ You're ready to go! :sunglasses: 

#

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) |
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Google+](https://plus.google.com/u/0/+LintangWisesa1) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)

