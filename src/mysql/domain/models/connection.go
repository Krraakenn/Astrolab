package models

type Connection struct {
	Hostname string `json:"hostname"`
	Port     uint16 `json:"port"`
	Database string `json:"database"`
	Username string `json:"username"`
	Password string `json:"password"`
}
