console.log('constants')
var walldamp = -1;
var damping = 1;
var spring = 0.5;
var GrassBGColor = RGBColor(168, 220, 163);
var GrassColor  = RGBColor(105, 158, 95);
var GrassColor2  = RGBColor(40, 140, 40);
var GrassColor3 = 0x699e5f;
var TreeGrassColor = 0x6A8E20;
var OceanColor = 0x36b2f3ff;
var LightCyan = 0xe0ffff;
var LightBlue = 0x9aaee6;
var LightOrange = 0xffac4c;
var LightYellow = 0xfffb45;
var DarkGreen = 0x1abc9c;
var Red = 0xff9999;
var Blue = 0x9999ff;
var Green = 0x99ff99;
var Teal = 0x99f9f9;
var Purple = 0xf999f9;
var Black = 0x000000;

var TitleYellow = 0xffd422;
var SkyColor = RGBColor(51, 153, 255);
var OrangeColor = 0xFFA500;
var PI = Math.PI;

//window.PlatformType = function(){}
function PlatformType() {}
PlatformType.Desktop = 0;
PlatformType.Mobile = 1;
PlatformType.Facebook = 2;

function FaceBookState(){}
FaceBookState.NotConnected = 0;
FaceBookState.Connected = 1;

function GameState() {}
GameState.Loading		= 1;
GameState.MainMenu		= 5;
GameState.MainMenu2StageSelect		= 6;
GameState.StageSelect		= 7;
GameState.MultiPlayerMenu	= 8;
GameState.GameRoom		= 9;
GameState.GetReady		= 10;
GameState.StartGame		= 11;
GameState.InPlay		= 12;
GameState.InGame        = 12;
GameState.PauseGame     = 15;
GameState.StoryMenu 	= 50;
GameState.GameOver		= 100;

GameState.StoryMenu	= 200;

function getGameState(gamestate){
    switch(gamestate){
        case GameState.GameRoom:
            return 'GameRoom'
        case GameState.InGame:
            return 'InGame'
    }
    return ''
}

function GameMode(){}
GameMode.SinglePlayer = 0;
GameMode.MultiPlayer = 1;
GameMode.Story = 2;


function StartLocation(){}
StartLocation.NW = 0;
StartLocation.NE = 1;
StartLocation.SW = 2;
StartLocation.SE = 3;

var INVALID_Team = -1;
var Team0 = 0;
var Team1 = 1;
var Team2 = 2;
var Team3 = 3;
var Observer = 4;

function PlayerType(){}
PlayerType.Player = 10;
PlayerType.Computer = 11;
PlayerType.Observer = 12;


function AnimationType(){}
AnimationType.Walk_Front = 0;
AnimationType.Attack_Front = 1;

AnimationType.Walk_Back = 5;
AnimationType.Attack_Back = 6;

AnimationType.Idle = 10;
AnimationType.Attack = 11;

function UpgradeType(){}
UpgradeType.Invalid = -1;
UpgradeType.Attack = 0;
UpgradeType.Defense = 1;
UpgradeType.Speed = 2;

function TileType(){}
TileType.Empty = 0;

TileType.Left = 4;
TileType.TopLeft = 7;
TileType.Top = 8;
TileType.TopRight = 9;
TileType.Right = 6;
TileType.BotRight = 3;
TileType.Bot = 2;
TileType.BotLeft = 1;
TileType.All = 5;

TileType.LeftRight = 27;
TileType.TopBot = 28;


function IntersectType(){}
IntersectType.Left = 0;
IntersectType.Top = 1;
IntersectType.Right = 2;
IntersectType.Bot = 3;

function PathType(){}
PathType.Center = 0;
PathType.Team0 = 1;
PathType.Team1 = 2;
PathType.Team2 = 3;
PathType.Team3 = 4;

PathType.Clear = 10;
PathType.Seek = 20;

function StageType(){}
StageType.Frenzy = 0;
StageType.Moba = 1;
StageType.Rpg = 2;

function TeamState(){}
TeamState.Win = 0;
TeamState.Lose = 1;
TeamState.InPlay = 2;
TeamState.Observe = 3;

function LoseType(){}
LoseType.LoseMain = 0;
LoseType.Leaves = 1;

function Direction(){}
Direction.Left = -1;
Direction.Right = 1;


function CharacterType() {}
CharacterType.Invalid   = -1;
CharacterType.Hut       = 0;
CharacterType.Cow       = 1;
CharacterType.CowMage   = 2;
CharacterType.Tower     = 3;
CharacterType.Slime     = 4;
CharacterType.Total     = 5;


CharacterType.SearchBound = 8;

CharacterType.Alien		= 11;
CharacterType.Piranha	= 12;
CharacterType.Duck		= 13;
CharacterType.Cat		= 15;
CharacterType.Knight	= 16;
CharacterType.Mole		= 17;
CharacterType.Stick		= 18;
CharacterType.Mask	= 19;
CharacterType.Demon	= 20;


function ParticleType() {}

ParticleType.FLAME      = 0;
ParticleType.BACK       = 1;
ParticleType.TEXT		= 2;
ParticleType.CHARGEFLAME = 3;
ParticleType.ICON 		= 4;
ParticleType.COIN      = 5;
ParticleType.FIREBALL  = 6;
ParticleType.ARROW  	= 7;

function ClassType() {}
ClassType.Character = 0;
ClassType.Path = 1;
ClassType.SearchBound = 2;

function StatusType() {}
StatusType.Inanimate = 0;
StatusType.Movable = 1;
StatusType.NotMovable = 0;

// Obsolete
/*
function DrawType(){}
DrawType.None = 0;
DrawType.Graphics = 1;
DrawType.Sprite = 2;

function BallType(){}
BallType.Draw			= 0;
BallType.NotDraw		= 1;

function ItemType(){}
ItemType.Shuriken		= 0;
ItemType.Sword			= 1;

function SurfaceType(){}
SurfaceType.Sline = 0;

function SurfaceInteractType(){}
SurfaceInteractType.Bound = 0;
SurfaceInteractType.Bounce = 1;

function TileType(){}
TileType.NotSurface = 0;
TileType.Surface = 1;
TileType.LeftDownSlant = 2;
TileType.RightDownSlant = 3;




function GameItemType() {}
GameItemType.Fence = 0;
GameItemType.Hut = 1;




function ShapeType(){}
ShapeType.Rect = 0;
ShapeType.Circle = 1;

function ArmType(){}
ArmType.Head = 0;
ArmType.LArm = 1;
ArmType.RArm = 2;
ArmType.LLeg = 3;
ArmType.RLeg = 4;

function SpriteType(){}
SpriteType.Body = 0;
SpriteType.Head = 1;
SpriteType.LArm = 2;
SpriteType.RArm = 3;
SpriteType.LLeg = 4;
SpriteType.RLeg = 5;
SpriteType.Cloth = 6;

function MovementSetType(){}
MovementSetType.Charge = 0;
MovementSetType.Stand = 1;
MovementSetType.Block = 2;
MovementSetType.Jump = 3;
MovementSetType.Hop = 4;
MovementSetType.JumpForward = 5;

MovementSetType.Punch = 7;
MovementSetType.LongPunch = 8;
MovementSetType.Sword = 9;
MovementSetType.Shuriken = 10;

MovementSetType.Kick = 11;

MovementSetType.Slash = 12;


MovementSetType.Get_Hit_Back = 20;



function MovementType() {}
MovementType.Charge = 0;
MovementType.Charge_LArm = 1;
MovementType.Charge_RArm = 2;
MovementType.Charge_LLeg = 3;
MovementType.Charge_RLeg = 4;
MovementType.Dash 		 = 5;	// ground dash only
MovementType.Dash_to_original = 11;
MovementType.Jump = 20;
MovementType.Stand = 21;
MovementType.Stand_Body = 22;


MovementType.Punch	= 32;
MovementType.PunchPull = 33;
MovementType.Walk1	= 34;
MovementType.Walk2 = 35;
MovementType.Idle = 40;
MovementType.Idle_Move = 41;

MovementType.Throw_item_LArm = 61;
MovementType.Throw_item_RArm = 62;

MovementType.Hit_Back = 80;

function Status(){};
Status.Idle = 0;
Status.Hit_Back = 1;
Status.Defense = 2;
Status.Attack = 3;
Status.Dodge = 4;
/**/
