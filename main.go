package main

import (
	"embed"
	"fmt"
	"log"

	"github.com/go-gl/glfw/v3.3/glfw"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
)

func init() {
	if err := glfw.Init(); err != nil {
		log.Fatalln("failed to initialize glfw:", err)
	}
}

var assets embed.FS

//go:embed frontend/src/assets/images/logo_astrolab.png
var macIcon []byte

func main() {

	defer glfw.Terminate()

	monitor := glfw.GetPrimaryMonitor()
	if monitor == nil {
		log.Fatalln("failed to get primary monitor")
	}

	mode := monitor.GetVideoMode()
	if mode == nil {
		log.Fatalln("failed to get video mode")
	}

	fmt.Printf("Screen Width: %d, Screen Height: %d\n", mode.Width, mode.Height)

	// Create an instance of the app structure
	app := NewApp()

	err := wails.Run(&options.App{
		Title:  "Astrolabs",
		Width:  mode.Width,
		Height: mode.Height,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
		Mac: &mac.Options{
			TitleBar: mac.TitleBarHiddenInset(),
			About: &mac.AboutInfo{
				Title:   "My Application",
				Message: "© 2021 Me",
				Icon:    macIcon,
			},
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
