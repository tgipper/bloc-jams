var albumPicasso = {
	title: 'The Colors',
	artist: 'Pablo Picasso',
	label: 'Cubism',
	year: '1881',
	albumArtUrl: 'assets/images/album_covers/01.png',
	songs: [
		{title: 'Blue', duration: '4:26' },
		{title: 'Green', duration: '3:14' },
		{title: 'Red', duration: '5:01' },
		{title: 'Pink', duration: '3:21' },
		{title: 'Magenta', duration: '2:15' }
	]
};

var albumMarconi = {
	title: 'The Telephone',
	artist: 'Guglielmo Marconi',
	label: 'EM',
	year: '1909',
	albumArtUrl: 'assets/images/album_covers/20.png',
	songs: [
		{ title: 'Hello, Operator?', duration: '1:01' },
		{ title: 'Ring, Ring, Ring', duration: '5:01' },
		{ title: 'Fits in Your Pocket', duration: '3:21' },
		{ title: 'Can You Hear Me Now?', duration: '3:14' },
		{ title: 'Wrong Phone Number', duration: '2:15' }
	]
};

var albumAdams = {
	title: 'National Parks',
	artist: 'Ansel Adams',
	label: 'Department of the Interior',
	year: '1941',
	albumArtUrl: 'assets/images/album_covers/09.png',
	songs: [
		{ title: 'The Face of Half Dome', duration: '3:02' },
		{ title: 'Rose and Driftwood', duration: '2:26' },
		{ title: 'Canyon de Chelly', duration: '3:45' },
		{ title: 'Mooonrise', duration: '4:10' },
		{ title: 'El Capitan', duration: '3:31' }
	]
};

var createSongRow = function(songNumber, songName, songLength) {
	var template =
		'<tr class="album-view-song-item">'
		+ ' <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
		+ ' <td class="song-item-title">' + songName + '</td>'
		+ ' <td class="song-item-duration">' + songLength + '</td>'
	  + '</tr>'
	;
	
	var $row= $(template);
	
	var clickHandler = function() {
		var songNumber = $(this).attr('data-song-number');

		if (currentlyPlayingSong !== null) {
			var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
			currentlyPlayingCell.html(currentlyPlayingSong);
		}
		if (currentlyPlayingSong !== songNumber) {
			$(this).html(pauseButtonTemplate);
			currentlyPlayingSong = songNumber;
		} else if (currentlyPlayingSong === songNumber) {
			$(this).html(playButtonTemplate);
			currentlyPlayingSong = null;
		}
	};
	
    var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
    };

    var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
        }
    };
	
	$row.find('.song-item-number').click(clickHandler);
	$row.hover(onHover, offHover);
	return $row;
	
};

var $albumTitle = $('.album-view-title');
var $albumArtist = $('.album-view-artist');
var $albumReleaseInfo = $('.album-view-release-info');
var $albumImage = $('.album-cover-art');
var $albumSongList = $('.album-view-song-list');

var setCurrentAlbum = function(album) {

	$albumTitle.text(album.title);
	$albumArtist.text(album.artist);
	$albumReleaseInfo.text(album.year + ' ' + album.label);
	$albumImage.attr('src', album.albumArtUrl);
	
	$albumSongList.empty();

	for (var i = 0; i < album.songs.length; i++) {
		var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
		$albumSongList.append($newRow);
	}
};


var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var currentlyPlayingSong = null;

$(document).ready(function() {
	setCurrentAlbum(albumPicasso);
	
	
	var albumArray = [albumPicasso,albumMarconi, albumAdams];
	var index = 1;
	$albumImage.addEventListener("click", function(event) {
		setCurrentAlbum(albumArray[index]);
		index++;
		if(index == albumArray.length){
			index = 0;
		};
	})
});