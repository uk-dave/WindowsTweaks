/*
 ************************************************************************
 *
 * Work_Timer
 * Copyright (C) 2014, David C. Merritt, david.c.merritt@siemens.com
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 ************************************************************************
 * 
 * The javascript for the flyout.html file for a Windows Sidebar gadget 
 * for a simple countdown timer for Windows.
 * 
 ************************************************************************
 * 
 * 05/01/2014  merritt  initial release
 * 
 ************************************************************************
*/

System.Gadget.Flyout.onShow = showFlyout;
System.Gadget.Flyout.onHide = hideFlyout;

// display the Flyout state in the gadget
function showFlyout()
{
    // set the colour and text
    document.body.style.backgroundColor = System.Gadget.Settings.read("Background");
    document.body.style.color = System.Gadget.Settings.read("Colour");
    document.getElementById("msg").firstChild.nodeValue = System.Gadget.Settings.read("Message"); 
}

// hide the flyout and display the Flyout state in the gadget
function hideFlyout()
{
    System.Gadget.Flyout.show = false;
}


