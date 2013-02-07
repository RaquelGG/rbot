#rbot
A bot based on mineflayer which can execute task with dependancies

[Youtube Demo of repeat spiral down](http://www.youtube.com/watch?v=UM1ZV5200S0)

## Features
 * basic mecanism to handle task and dependancies
 * a few task : dig, move, repeat, sequence
 * integration of mineflayer-navigate which can make the bot go to any position not too far away
 * dig a spiral staircase
 * inventory management : equip,toss,list
 * attack
 
### Roadmap

 * Doing more complicated things :
  * crafting things
  * getting anywhere even if it's hard
  * building things
 * Integrate other mineflayer functionnality : 
  * building
  * crafting
  * using chests, dispensers and enchantment tables
  * use vehicle
  * activate block
 * React to the world : for example if a mob attack the bot, the bot should defend itself
 * Improve/simplify the code

## Installation

First, you need to install [node](http://nodejs.org/)

### Linux / OSX

 * `npm install -g rbot`
 
### Windows

 * Follow the Windows instructions from [Obvious/ursa](https://github.com/Obvious/ursa)
 * `npm install -g rbot`

If you download the source via github, you can just run `npm install`


## Usage
 * If you specify a master the bot will only obey to him
 * `rbot <host> <port> <name> <password> [<master>]`


### Commands
 * `dig <position>`
 * `move <position>`
 * `x+` `x-` `z+` `z-`
 * `dig forward <position>` : dig the two block in front of the bot then move, works if there is gravel that fall
 * `repeat <action>` for example :
  * `repeat dig forward <position>`
 * `<action1> then <action2>` : do first action then do the second one, for example :
  * `x+ then z+`
 * `look for entity <entity>`
 * `look for block <block>`
 * `stop repeat <action>`
 * `pos <player>` : say the position of the other player if he is not too far away
 * `move to <position>` : use mineflayer-navigate to get to <position>
 * `stop move to`
 * `spiral up` : dig an ascending spiral staircase
 * `spiral down` : dig a descending spiral staircase
 * `equip <emplacement> <item>` : equip item at emplacement (for example hand)
 * `toss <item>`
 * `list` : list all items of the bot
 * `attack <entity>`
 * `say <message>`
 * `activate item`
 * `deactivate item`
 * `wait <milliseconds>`
 * `raise chicken` : get an egg then throw it
 * `stop raise chicken`
 * `look at <position>`
 * `shoot <position>` : if it has a bow and arrows, shoot <position>
 * `follow <position>` : go to `<position>` every 2 sec
 * `get <nameBlock>` : go to a position next to nearest `<nameBlock>` then dig it
 * `build <position>` : build at position with the equipped block
 * `build shelter` : build a very simple shelter with the equipped block (need 25 blocks)
 * `destroy shelter` : destroy this shelter

### Parameters
 * `<position>` can be :
  * `rx,y,z` : relative position
  * `x,y,z` : absolute position
  * `<entity>`
  * `<block>`
  * `nearest reachable position <position>`
 * `<block>` can be :
  * `nearest block <nameBlock>`
  * `nearest block : any nearest block`
 * `<entity>` can be :
  * `nearest mob <mob>`
  * `nearest mob : any nearest mob`
  * `nearest mob reachable <mob>`
  * `nearest mob reachable` : any nearest reachable mob
  * `nearest object <object>`
  * `nearest object : any nearest object`
  * `nearest object reachable <object>`
  * `nearest object reachable` : any nearest reachable object
  * `me`
  * `player <playerName>`
 * `<mob>` can be :
  * `spider`
  * `enderman`
  * `creeper`
  * ...

### Interesting use of commands
 * `repeat spiral down` : build a spiral staircase from y=64 to y=0
 * `repeat attack nearest reachable mob` : attack mobs close from the mob
 * `repeat dig forward r0,0,1` : if you want to build a tunnel (not stopped by gravel, but can die from drowning)
 * `move to me`
 * `repeat raise chicken then wait 1000`
 * `stop repeat raise chicken then wait 1000`
 * `repeat look at me`
 * `repeat shoot nearest reachable mob` : kill close mobs
 * `repeat shoot me` : kill you
 * `move to nearest reachable position nearest block log`
 * `follow me`
 * `stop follow me`
 * `get log`
 * `repeat build shelter then destroy shelter` : fun
